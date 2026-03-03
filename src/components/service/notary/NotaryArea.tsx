
"use client";
import { useMemo, useRef, useState } from "react";
import { useSubmitContactForm } from "@/hooks/useSubmitContactForm";

export default function NotaryArea({ dictionary }: { dictionary: any }) {
  const [selectedService, setSelectedService] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const { status, isSubmitting, submit } = useSubmitContactForm();

  const handleBookAppointmentClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    if (formRef.current) {
      const yOffset = -140; // Accounts for sticky header
      const y = formRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const statusMessage = useMemo(() => {
    if (status === "success") return dictionary.form.success_message;
    if (status === "error") return dictionary.form.error_message;
    return "";
  }, [dictionary.form.error_message, dictionary.form.success_message, status]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => (data.get(key) || "").toString().trim();

    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const service = get("service");
    const date = get("date");

    const messageLines = [
      service ? `Service: ${service}` : null,
      date ? `Preferred date: ${date}` : null,
    ].filter(Boolean);

    const ok = await submit(
      {
        name,
        email,
        phone,
        message: messageLines.join("\n") || "Notary appointment request.",
        website: get("website"),
        formType: dictionary.form.title || dictionary.header_title || "Appointment",
        service: service || dictionary.header_title,
      },
      form
    );

    if (ok) {
      setSelectedService("");
    }
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <div className="notary-service-grid">
              {dictionary.services.map((item: any, index: number) => (
                <div key={index} className="notary-service-card">
                  <div className="notary-service-header">
                    <div className="notary-service-number">{item.number}</div>
                    <h3 className="notary-service-title">{item.title}</h3>
                  </div>
                  <p className="notary-service-description">{item.description}</p>
                  <a
                    href="#"
                    className="trial-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      handleBookAppointmentClick(item.title);
                    }}
                  >
                    {dictionary.form.book_button}
                  </a>
                </div>
              ))}
            </div>

            <div className="trial-faq-section" style={{ marginTop: "4rem" }}>
              {dictionary.faq.map((faq: any, index: number) => (
                <div key={index} className="trial-faq-item">
                  <h4 className="trial-faq-question">{faq.question}</h4>
                  <p className="trial-faq-answer" style={{ whiteSpace: 'pre-line' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="trial-pricing-sidebar" ref={formRef}>
            <div className="trial-booking-form" style={{ position: 'sticky', top: '140px' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>{dictionary.form.title}</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="trial-form-field" style={{ display: "none" }} aria-hidden="true">
                  <label>Website</label>
                  <input type="text" name="website" autoComplete="off" tabIndex={-1} />
                </div>
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
                  <select
                    name="service"
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="">{dictionary.form.option_placeholder}</option>
                    {dictionary.services.map((p: any) => (
                      <option key={p.title} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="trial-form-field">
                   <input name="date" type="date" required />
                </div>
                <button type="submit" className="trial-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? dictionary.form.loading_label : dictionary.form.submit_button}
                </button>
                {statusMessage ? <p className="mt-3 mb-0">{statusMessage}</p> : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
