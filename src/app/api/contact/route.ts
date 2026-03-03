import { NextResponse } from "next/server";

const MAX_MESSAGE_LENGTH = 4000;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL || fromEmail;

  if (!apiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { error: "Missing email configuration." },
      { status: 500 }
    );
  }

  let payload: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    message?: string;
    website?: string;
    formType?: string;
    service?: string;
  };

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const website = payload.website?.trim() ?? "";
  const formType = payload.formType?.trim() ?? "";
  const service = payload.service?.trim() ?? "";

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!isNonEmpty(name) || !isNonEmpty(email) || !isNonEmpty(message)) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 }
    );
  }

  const textLines = [
    formType ? `Form: ${formType}` : null,
    service ? `Service: ${service}` : null,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    "",
    message,
  ].filter(Boolean);

  const subjectPrefix =
    formType || service
      ? ([formType, service].filter(Boolean) as string[])
      : ["Contact form"];
  const subjectParts = [...subjectPrefix, name].filter(Boolean) as string[];
  const subject = subjectParts.join(" - ").slice(0, 120);

  const html = `
    <h2>New contact form submission</h2>
    ${formType ? `<p><strong>Form:</strong> ${escapeHtml(formType)}</p>` : ""}
    ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ""}
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `.trim();

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "User-Agent": "garhoud-contact/1.0",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject,
      text: textLines.join("\n"),
      html,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    return NextResponse.json(
      { error: "Email delivery failed.", details: errorBody },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
