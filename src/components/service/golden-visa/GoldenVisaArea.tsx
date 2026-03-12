"use client";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function GoldenVisaArea({ dictionary }: { dictionary: any }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => (data.get(key) || "").toString().trim();

    const whatsappUrl = buildWhatsAppUrl([
      { label: "Service", value: dictionary.header_title || "Golden Visa" },
      { label: "Name", value: get("name") },
      { label: "Phone", value: get("phone") },
      { label: "Email", value: get("email") },
      { label: "Interested In", value: get("interest") },
      { label: "Notes", value: get("notes") },
    ]);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: "60px" }}>
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <div className="trial-faq-item" style={{ marginBottom: "2rem" }}>
              <h3 className="trial-faq-question" style={{ marginBottom: "1rem" }}>
                {dictionary.overview_title}
              </h3>
              <p className="trial-faq-answer">{dictionary.overview_description}</p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {dictionary.benefits.map((benefit: string, index: number) => (
                <div
                  key={index}
                  className="notary-service-card"
                  style={{ minHeight: "100px", display: "flex", alignItems: "center" }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#111",
                    }}
                  >
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="trial-pricing-sidebar">
            <div className="trial-booking-form" style={{ position: "sticky", top: "140px" }}>
              <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>{dictionary.form.title}</h3>
              <form onSubmit={handleSubmit}>
                <div className="trial-form-field">
                  <input name="name" type="text" placeholder={dictionary.form.name_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <input name="phone" type="tel" placeholder={dictionary.form.phone_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <input name="email" type="email" placeholder={dictionary.form.email_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <select name="interest" defaultValue="" required>
                    <option value="" disabled>
                      {dictionary.form.option_placeholder}
                    </option>
                    {dictionary.benefits.map((benefit: string) => (
                      <option key={benefit} value={benefit}>
                        {benefit}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="trial-form-field">
                  <textarea name="notes" placeholder={dictionary.form.notes_placeholder}></textarea>
                </div>
                <button type="submit" className="trial-submit-btn">
                  {dictionary.form.whatsapp_button}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
