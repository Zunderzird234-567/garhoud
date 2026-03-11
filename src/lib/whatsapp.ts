const DEFAULT_WHATSAPP_NUMBER = "97143991744";

type WhatsAppField = {
  label: string;
  value: string;
};

export function buildWhatsAppUrl(fields: WhatsAppField[]) {
  const message = fields
    .filter((field) => field.value.trim())
    .map((field) => `${field.label}: ${field.value.trim()}`)
    .join("\n");

  return `https://wa.me/${DEFAULT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
