
"use client";
import { useMemo, useState } from "react";
import { useSubmitContactForm } from "@/hooks/useSubmitContactForm";

export default function AccountingArea({ dictionary }: { dictionary: any }) {
  const [serviceRequired, setServiceRequired] = useState(dictionary.form.service_options[0]);
  const { status, isSubmitting, submit } = useSubmitContactForm();

  const statusMessage = useMemo(() => {
    if (status === "success") return dictionary.form.success_message;
    if (status === "error") return dictionary.form.error_message;
    return "";
  }, [dictionary.form.error_message, dictionary.form.success_message, status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => (data.get(key) || "").toString().trim();

    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const service = get("service");
    const turnover = get("turnover");
    const notes = get("message");

    const messageLines = [
      service ? `Service required: ${service}` : null,
      turnover ? `Annual turnover: ${turnover}` : null,
      notes ? `Message: ${notes}` : null,
    ].filter(Boolean);

    const ok = await submit(
      {
        name,
        email,
        phone,
        message: messageLines.join("\n") || "Service enquiry.",
        website: get("website"),
        formType: dictionary.form.title || dictionary.header_title || "Service Consultation",
        service: dictionary.header_title || service,
      },
      form
    );

    if (ok) {
      setServiceRequired(dictionary.form.service_options[0]);
    }
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="consultancy-container">
          <div className="consultancy-services">
            <div className="consultancy-service-list">
               {dictionary.services.map((category: any, index: number) => (
                <div key={index} style={{ breakInside: 'avoid', pageBreakInside: 'avoid', marginBottom: '2.5rem' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#bd8c2e', marginBottom: '1rem', fontFamily: '"Baloo Thambi 2", system-ui' }}>{category.title}</h4>
                  <ul>
                    {category.items.map((service: string, i: number) => (
                      <li key={i} style={{marginBottom: '0.5rem'}}>{service}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="consultancy-form">
            <div className="trial-booking-form">
              <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>{dictionary.form.title}</h3>
              <form onSubmit={handleSubmit}>
                <div className="trial-form-field" style={{ display: "none" }} aria-hidden="true">
                  <label>Website</label>
                  <input type="text" name="website" autoComplete="off" tabIndex={-1} />
                </div>
                <div className="trial-form-field">
                   <label htmlFor="name" style={{fontSize: '0.8rem', color: '#757575', marginBottom: '4px', display: 'block'}}>{dictionary.form.name_label}</label>
                  <input id="name" name="name" type="text" required />
                </div>
                <div className="trial-form-field">
                  <label htmlFor="phone" style={{fontSize: '0.8rem', color: '#757575', marginBottom: '4px', display: 'block'}}>{dictionary.form.phone_label}</label>
                  <div className="consultancy-phone-group">
                    <span>+971</span>
                    <input id="phone" name="phone" type="tel" placeholder={dictionary.form.phone_placeholder} required />
                  </div>
                </div>
                <div className="trial-form-field">
                   <label htmlFor="email" style={{fontSize: '0.8rem', color: '#757575', marginBottom: '4px', display: 'block'}}>{dictionary.form.email_label}</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div className="trial-form-field">
                  <select name="service" required value={serviceRequired} onChange={(e) => setServiceRequired(e.target.value)}>
                    <option value="" disabled>{dictionary.form.service_label}</option>
                    {dictionary.form.service_options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="trial-form-field">
                  <select name="turnover" required defaultValue="">
                    <option value="" disabled>{dictionary.form.turnover_label}</option>
                     {dictionary.form.turnover_options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="trial-form-field">
                    <label htmlFor="message" style={{fontSize: '0.8rem', color: '#757575', marginBottom: '4px', display: 'block'}}>{dictionary.form.message_label}</label>
                  <textarea id="message" name="message" required></textarea>
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
