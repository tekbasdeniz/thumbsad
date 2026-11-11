import { handleFormSubmission } from "@/lib/form-submissions";

export async function POST(
  request: Request,
  context: { params: Promise<{ form: string }> },
) {
  const { form } = await context.params;
  return handleFormSubmission(request, form);
}
