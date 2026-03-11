"use client";
import { useRef, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function TypingArea({ dictionary }: { dictionary: any }) {
  const [enquiryService, setEnquiryService] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const handleEnquiryClick = (serviceTitle: string) => {
    setEnquiryService(serviceTitle);
    if (formRef.current) {
      const yOffset = -140;
      const y = formRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleEnquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => (data.get(key) || "").toString().trim();

    const whatsappUrl = buildWhatsAppUrl([
      { label: "Service", value: dictionary.header_title || "Typing Services" },
      { label: "Document Type", value: get("enquiryService") },
      { label: "Name", value: get("name") },
      { label: "Phone", value: get("phone") },
      { label: "Email", value: get("email") },
      { label: "Notes", value: get("notes") },
    ]);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: "60px" }}>
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <div className="trial-pricing-grid">
              {dictionary.services.map((item: any, index: number) => (
                <div key={index} className="trial-pricing-card">
                  <h3>{item.title}</h3>
                  <div className="trial-pricing-buttons" style={{ marginTop: "2rem" }}>
                    <a
                      href="#"
                      className="trial-btn enquire"
                      onClick={(e) => {
                        e.preventDefault();
                        handleEnquiryClick(item.title);
                      }}
                    >
                      {dictionary.btn_enquire}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="trial-pricing-sidebar" ref={formRef}>
            <div className="trial-booking-form">
              <form onSubmit={handleEnquirySubmit}>
                <div className="trial-form-field">
                  <input name="name" type="text" placeholder={dictionary.form.name_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <input name="email" type="email" placeholder={dictionary.form.email_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <input name="phone" type="tel" placeholder={dictionary.form.phone_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <select
                    name="enquiryService"
                    value={enquiryService}
                    onChange={(e) => setEnquiryService(e.target.value)}
                    required
                  >
                    <option value="">{dictionary.form.enquiry_option_placeholder}</option>
                    {dictionary.services.map((p: any) => (
                      <option key={p.title} value={p.title}>
                        {p.title}
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
