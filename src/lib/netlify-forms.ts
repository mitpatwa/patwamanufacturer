// Submits data to Netlify Forms. Every form name and field used here must also be
// declared in public/__forms.html so Netlify registers it at deploy time.
export async function submitNetlifyForm(
  formName: string,
  data: Record<string, string | number | boolean | null | undefined>
): Promise<void> {
  const body = new URLSearchParams({ 'form-name': formName });
  for (const [key, value] of Object.entries(data)) {
    if (value !== null && value !== undefined) body.append(key, String(value));
  }

  const response = await fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`);
  }
}
