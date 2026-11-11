import type { FormKind } from "./form-submissions";

export async function submitConfirmedForm(
  form: FormKind,
  payload: Record<string, unknown>,
  language: "tr" | "en",
): Promise<void> {
  const response = await fetch(`/api/forms/${form}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("Registration was not confirmed");
  const result: unknown = await response.json();
  if (!result || typeof result !== "object" || !("success" in result) || result.success !== true) {
    throw new Error("Registration was not confirmed");
  }

  // Only fixed form metadata is sent to Analytics, never name/email/payload.
  // Analytics failures must not make a saved registration look unsuccessful.
  try {
    const analytics = window as unknown as { gtag?: (...args: unknown[]) => void };
    analytics.gtag?.("event", "form_submit_success", {
      send_to: "G-MM1PQ30MY0",
      form_id: form,
      language,
    });
  } catch {
    // A blocked Analytics script does not affect registration success.
  }
}
