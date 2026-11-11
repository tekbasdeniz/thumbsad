export type FormKind = "insights" | "webinar";

const DEFAULT_WEBINAR_URL =
  "https://script.google.com/macros/s/AKfycbztAxAj9p27Af3twfxUYOapjhJ5HckRMmjTTV3sCzz0XM0APwDSD3ZQy7eNXMpqjjbD/exec";

// A 2xx/opaque response alone is not evidence that a registration was saved.
export function isConfirmedRegistration(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;
  const result = value as Record<string, unknown>;
  return result.success === true && !result.error;
}

export async function handleFormSubmission(
  request: Request,
  form: string,
): Promise<Response> {
  const reply = (success: boolean, status: number) =>
    Response.json({ success }, { status, headers: { "Cache-Control": "no-store" } });

  if (form !== "insights" && form !== "webinar") return reply(false, 404);
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return reply(false, 403);

  let payload: Record<string, unknown>;
  try {
    const body = await request.text();
    if (body.length > 16_384) return reply(false, 413);
    const value: unknown = JSON.parse(body);
    if (!value || typeof value !== "object" || Array.isArray(value)) return reply(false, 400);
    payload = value as Record<string, unknown>;
  } catch {
    return reply(false, 400);
  }

  const name = typeof payload.fullName === "string" ? payload.fullName.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const language = payload.language;
  const hasConsent = form === "insights"
    ? payload.consentStatus === "Approved" || payload.consentStatus === "Onaylandı"
    : payload.marketingConsent === true;
  if (!name || name.length > 200 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !hasConsent || !["TR", "EN", "tr", "en"].includes(String(language)) ||
      (form === "webinar" && (typeof payload.program !== "string" || !payload.program.trim() || payload.program.length > 500))) {
    return reply(false, 400);
  }

  const endpoint = form === "insights"
    ? process.env.NEXT_PUBLIC_INSIGHTS_SHEET_URL
    : process.env.NEXT_PUBLIC_WEBINAR_SCRIPT_URL || DEFAULT_WEBINAR_URL;
  if (!endpoint) return reply(false, 503);
  try {
    const url = new URL(endpoint);
    if (url.protocol !== "https:" || url.username || url.password) return reply(false, 503);
  } catch {
    return reply(false, 503);
  }

  try {
    // The destination is server-configured, never accepted from the browser.
    // Server-side fetch can read the Apps Script response without browser CORS.
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...payload, fullName: name, email }),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) return reply(false, 502);
    const result: unknown = await response.json();
    return isConfirmedRegistration(result) ? reply(true, 200) : reply(false, 502);
  } catch {
    // Do not return or log the upstream response or submitted personal data.
    return reply(false, 502);
  }
}
