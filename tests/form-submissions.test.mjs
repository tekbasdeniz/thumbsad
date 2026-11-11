import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

// Exercise the actual TypeScript implementation with no real upstream writes.
function load(relativePath, overrides = {}) {
  const source = fs.readFileSync(new URL(`../${relativePath}`, import.meta.url), 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const compiled = { exports: {} };
  vm.runInNewContext(output, {
    module: compiled, exports: compiled.exports, Response, URL, AbortSignal,
    process: { env: { NEXT_PUBLIC_INSIGHTS_SHEET_URL: 'https://script.google.com/example/exec' } },
    fetch: async () => { throw new Error('Unexpected network call'); },
    ...overrides,
  });
  return compiled.exports;
}

const payload = {
  fullName: ' Test Person ', email: ' TEST@EXAMPLE.COM ', language: 'TR',
  consentStatus: 'Onaylandı',
};
function request(body = payload, origin = 'https://www.thumbsad.com') {
  return new Request('https://www.thumbsad.com/api/forms/insights', {
    method: 'POST', headers: { origin, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

test('confirmed upstream registration returns only success and normalizes contact fields', async () => {
  let calls = 0;
  const { handleFormSubmission } = load('src/lib/form-submissions.ts', {
    fetch: async (url, options) => {
      calls++;
      assert.equal(url, 'https://script.google.com/example/exec');
      const body = JSON.parse(options.body);
      assert.equal(body.fullName, 'Test Person');
      assert.equal(body.email, 'test@example.com');
      assert.equal(options.cache, 'no-store');
      return Response.json({ success: true, email: body.email });
    },
  });
  const response = await handleFormSubmission(request(), 'insights');
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(calls, 1);
});

test('rejects invalid input, missing consent, unknown forms, and cross-origin requests before forwarding', async () => {
  const { handleFormSubmission } = load('src/lib/form-submissions.ts');
  for (const body of [null, [], {}, { ...payload, fullName: ' ' },
    { ...payload, email: 'invalid' }, { ...payload, consentStatus: false },
    { ...payload, language: 'unknown' }]) {
    assert.equal((await handleFormSubmission(request(body), 'insights')).status, 400);
  }
  assert.equal((await handleFormSubmission(request(), 'unknown')).status, 404);
  assert.equal((await handleFormSubmission(request(payload, 'https://other.example'), 'insights')).status, 403);
  const malformed = new Request('https://www.thumbsad.com/api/forms/insights', { method: 'POST', body: '{' });
  assert.equal((await handleFormSubmission(malformed, 'insights')).status, 400);
  assert.equal((await handleFormSubmission(request({ ...payload, extra: 'x'.repeat(17000) }), 'insights')).status, 413);
});

test('webinar requires consent and a program; forwards through the server without no-cors', async () => {
  let calls = 0;
  const { handleFormSubmission } = load('src/lib/form-submissions.ts', {
    fetch: async (_url, options) => {
      calls++;
      assert.equal(options.mode, undefined);
      assert.equal(JSON.parse(options.body).program, 'AI Webinar');
      return Response.json({ success: true });
    },
  });
  const valid = { fullName: 'Test', email: 'test@example.com', language: 'tr', marketingConsent: true, program: 'AI Webinar' };
  assert.equal((await handleFormSubmission(request({ ...valid, marketingConsent: false }), 'webinar')).status, 400);
  assert.equal((await handleFormSubmission(request({ ...valid, program: '' }), 'webinar')).status, 400);
  assert.equal((await handleFormSubmission(request(valid), 'webinar')).status, 200);
  assert.equal(calls, 1);
});

test('HTTP errors, negative/unknown acknowledgements, invalid JSON, and network errors never report success', async () => {
  const outcomes = [
    () => Response.json({ success: true }, { status: 500 }),
    () => Response.json({ success: false }),
    () => Response.json({ success: true, error: 'write failed' }),
    () => Response.json({}),
    () => Response.json({ success: 'true' }),
    () => new Response('Google sign-in page', { status: 200 }),
    () => { throw new Error('timeout'); },
  ];
  for (const fetch of outcomes) {
    const { handleFormSubmission } = load('src/lib/form-submissions.ts', { fetch });
    const response = await handleFormSubmission(request(), 'insights');
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { success: false });
  }
});

test('missing endpoint fails without a network write', async () => {
  const { handleFormSubmission } = load('src/lib/form-submissions.ts', { process: { env: {} } });
  assert.equal((await handleFormSubmission(request(), 'insights')).status, 503);
});

test('client emits success only after acknowledgement, to the intended GA4 target without personal data', async () => {
  const events = [];
  const { submitConfirmedForm } = load('src/lib/submit-confirmed-form.ts', {
    fetch: async (url) => {
      assert.equal(url, '/api/forms/insights');
      assert.equal(events.length, 0);
      return Response.json({ success: true });
    },
    window: { gtag: (...args) => events.push(JSON.parse(JSON.stringify(args))) },
  });
  await submitConfirmedForm('insights', payload, 'tr');
  assert.deepEqual(events, [['event', 'form_submit_success', {
    send_to: 'G-MM1PQ30MY0', form_id: 'insights', language: 'tr',
  }]]);
});

test('client emits no conversion for failed/unconfirmed responses', async () => {
  let events = 0;
  for (const response of [Response.json({ success: false }), Response.json({}),
    Response.json({ success: true }, { status: 502 }), new Response('not json')]) {
    const { submitConfirmedForm } = load('src/lib/submit-confirmed-form.ts', {
      fetch: async () => response, window: { gtag: () => events++ },
    });
    await assert.rejects(() => submitConfirmedForm('insights', payload, 'tr'));
  }
  assert.equal(events, 0);
});

test('blocked or missing Analytics does not turn a saved registration into a failure', async () => {
  for (const window of [{}, { gtag: () => { throw new Error('blocked'); } }]) {
    const { submitConfirmedForm } = load('src/lib/submit-confirmed-form.ts', {
      fetch: async () => Response.json({ success: true }), window,
    });
    await submitConfirmedForm('webinar', payload, 'en');
  }
});
