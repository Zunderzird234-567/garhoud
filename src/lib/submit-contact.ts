export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  website?: string;
  formType?: string;
  service?: string;
};

export async function submitContactForm(payload: ContactPayload) {
  return fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
