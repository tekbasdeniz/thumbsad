# Confirmed form submission measurement

Both Insights and webinar forms POST to `/api/forms/insights` or
`/api/forms/webinar` on the same origin. The server forwards the registration to
the existing configured Apps Script URL, reads its response, and returns only
`{ "success": true }` when both HTTP success and a JSON `success: true` with no
error are present. Redirected login HTML, opaque responses, network errors,
timeouts, and unknown/negative JSON acknowledgements do not count as success.

The Apps Script must return `success: true` **only after saving the record**.
For example, after a successful Sheets write:

```js
return ContentService.createTextOutput(JSON.stringify({ success: true }))
  .setMimeType(ContentService.MimeType.JSON);
```

The actual deployed Apps Script response contract has not yet been verified.
Do not merge until this has been checked for both destinations. A successful
HTTP response, or a mock test, does not verify a real Sheets write. Do not add
another POST as a fallback: it could insert the same registration twice.

The existing `NEXT_PUBLIC_INSIGHTS_SHEET_URL` and
`NEXT_PUBLIC_WEBINAR_SCRIPT_URL` variables continue to work; the webinar's
existing fallback URL is preserved. No Vercel configuration change is required.

On confirmed success the client emits one `form_submit_success` call with
`send_to: G-MM1PQ30MY0`, a fixed `form_id` (`insights` or `webinar`), and `language`
(`tr` or `en`). It never adds the submitted name, email, program title, or payload
to this Analytics event. Analytics blocking must not prevent the success UI.
Component refs block repeated clicks while pending and after success; this is
not persistent server-side idempotency across retries, tabs, or page reloads.

## Validation

Run `node --test tests/form-submissions.test.mjs`, changed-file ESLint, and
`npx tsc --noEmit`. Automated tests stub upstream requests and Analytics so they
create no real registrations, subscriptions, or conversions.

Before release, use an explicitly authorized test registration to verify a
saved record and its acknowledgement for each form in TR and EN. Confirm no
success event on validation, HTTP, JSON, server-write, or timeout errors; one
success event per successful submission; and no second request on rapid clicks.
An upstream timeout/invalid acknowledgement can be ambiguous: the record may
have been saved before the response was lost. Check the destination before
retrying. End-to-end failure/retry safety needs upstream idempotency if required.

Keep automatic GA4 form measurement unchanged while testing. Only after the
confirmed event passes end-to-end checks and Deniz approves, mark
`form_submit_success` as a key event and unmark automatic `form_submit`. No GA4
or GTM settings are changed by this PR.
