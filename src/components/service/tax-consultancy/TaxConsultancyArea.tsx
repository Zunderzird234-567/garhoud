"use client";
import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function TaxConsultancyArea({ dictionary }: { dictionary: any }) {
  const [serviceRequired, setServiceRequired] = useState(dictionary.form.service_options[0]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => (data.get(key) || "").toString().trim();

    const whatsappUrl = buildWhatsAppUrl([
      { label: "Service", value: dictionary.header_title || get("service") },
      { label: "Name", value: get("name") },
      { label: "Phone", value: `+971 ${get("phone")}`.trim() },
      { label: "Email", value: get("email") },
      { label: "Service Required", value: get("service") },
      { label: "Annual Turnover", value: get("turnover") },
      { label: "Message", value: get("message") },
    ]);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: "60px" }}>
      <div className="container">
        <div className="consultancy-container">
          <div className="consultancy-services">
            <ul className="consultancy-service-list">
              {dictionary.services.map((service: string, index: number) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="consultancy-form">
            <div className="trial-booking-form">
              <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>{dictionary.form.title}</h3>
              <form onSubmit={handleSubmit}>
                <div className="trial-form-field">
                  <label htmlFor="name" style={{ fontSize: "0.8rem", color: "#757575", marginBottom: "4px", display: "block" }}>
                    {dictionary.form.name_label}
                  </label>
                  <input id="name" name="name" type="text" required />
                </div>
                <div className="trial-form-field">
                  <label htmlFor="phone" style={{ fontSize: "0.8rem", color: "#757575", marginBottom: "4px", display: "block" }}>
                    {dictionary.form.phone_label}
                  </label>
                  <div className="consultancy-phone-group">
                    <span>+971</span>
                    <input id="phone" name="phone" type="tel" placeholder={dictionary.form.phone_placeholder} required />
                  </div>
                </div>
                <div className="trial-form-field">
                  <label htmlFor="email" style={{ fontSize: "0.8rem", color: "#757575", marginBottom: "4px", display: "block" }}>
                    {dictionary.form.email_label}
                  </label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div className="trial-form-field">
                  <select name="service" required value={serviceRequired} onChange={(e) => setServiceRequired(e.target.value)}>
                    <option value="" disabled>
                      {dictionary.form.service_label}
                    </option>
                    {dictionary.form.service_options.map((opt: string) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="trial-form-field">
                  <select name="turnover" required defaultValue="">
                    <option value="" disabled>
                      {dictionary.form.turnover_label}
                    </option>
                    {dictionary.form.turnover_options.map((opt: string) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="trial-form-field">
                  <label htmlFor="message" style={{ fontSize: "0.8rem", color: "#757575", marginBottom: "4px", display: "block" }}>
                    {dictionary.form.message_label}
                  </label>
                  <textarea id="message" name="message" required></textarea>
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
