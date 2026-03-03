
"use client";
import { useMemo, useRef, useState } from "react";
import { useSubmitContactForm } from "@/hooks/useSubmitContactForm";

const pricingData = [
  {
    govFee: 270,
    typingFee: 52.5,
    total: 322.5,
  },
  {
    govFee: 700,
    typingFee: 52.5,
    total: 752.5,
  },
  {
    govFee: 1020,
    typingFee: 52.5,
    total: 1072.5,
  },
  {
    govFee: 1020,
    typingFee: 52.5,
    total: 1072.5,
  },
];

export default function DhaArea({ dictionary }: { dictionary: any }) {
  const [selectedService, setSelectedService] = useState("");
  const [activeTab, setActiveTab] = useState('appointment'); // 'appointment' or 'enquiry'
  const [enquiryService, setEnquiryService] = useState('');
  const formRef = useRef<HTMLDivElement>(null);
  const {
    status: appointmentStatus,
    isSubmitting: isSubmittingAppointment,
    submit: submitAppointment,
  } = useSubmitContactForm();
  const {
    status: enquiryStatus,
    isSubmitting: isSubmittingEnquiry,
    submit: submitEnquiry,
  } = useSubmitContactForm();

  const appointmentMessage = useMemo(() => {
    if (appointmentStatus === "success") return dictionary.form.success_message;
    if (appointmentStatus === "error") return dictionary.form.error_message;
    return "";
  }, [appointmentStatus, dictionary.form.error_message, dictionary.form.success_message]);

  const enquiryMessage = useMemo(() => {
    if (enquiryStatus === "success") return dictionary.form.success_message;
    if (enquiryStatus === "error") return dictionary.form.error_message;
    return "";
  }, [dictionary.form.error_message, dictionary.form.success_message, enquiryStatus]);

  const handleBookAppointmentClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setActiveTab('appointment');
    if (formRef.current) {
      const yOffset = -140; // Accounts for sticky header
      const y = formRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  const handleEnquiryClick = (serviceTitle: string) => {
    setEnquiryService(serviceTitle);
    setActiveTab('enquiry');
    if (formRef.current) {
      const yOffset = -140; // Accounts for sticky header
      const y = formRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleAppointmentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmittingAppointment) return;

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

    const ok = await submitAppointment(
      {
        name,
        email,
        phone,
        message: messageLines.join("\n") || "DHA appointment request.",
        website: get("website"),
        formType: dictionary.form.tab_book,
        service: service || dictionary.header_title || "DHA Services",
      },
      form
    );

    if (ok) {
      setSelectedService("");
    }
  };

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmittingEnquiry) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => (data.get(key) || "").toString().trim();

    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const service = get("enquiryService");
    const notes = get("notes");

    const messageLines = [
      service ? `Enquiry about ${service}.` : null,
      notes ? `Message: ${notes}` : null,
    ].filter(Boolean);

    const ok = await submitEnquiry(
      {
        name,
        email,
        phone,
        message: messageLines.join("\n") || "DHA service enquiry.",
        website: get("website"),
        formType: dictionary.form.tab_enquire,
        service: service || dictionary.header_title || "DHA Services",
      },
      form
    );

    if (ok) {
      setEnquiryService("");
    }
  };

  const combinedPricing = dictionary.pricing.map((item: any, index: number) => ({
    ...item,
    ...pricingData[index],
  }));

  return (
    <section className="azzle-section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <div className="trial-pricing-grid">
              {combinedPricing.map((item: any, index: number) => (
                <div key={index} className="trial-pricing-card">
                  <h3>{item.title}</h3>
                  <div className="trial-pricing-details">
                    <span>{dictionary.pricing_gov_fee}</span>
                    <span>{item.govFee.toFixed(1)}</span>
                  </div>
                  <div className="trial-pricing-details">
                    <span>{dictionary.pricing_typing_fee}</span>
                    <span>{item.typingFee.toFixed(1)}</span>
                  </div>
                  <div className="trial-pricing-details">
                    <strong>{dictionary.pricing_total}</strong>
                    <strong>{item.total.toFixed(1)}</strong>
                  </div>
                  <div className="trial-pricing-buttons">
                    <a href="#" className="trial-btn" onClick={(e) => { e.preventDefault(); handleBookAppointmentClick(item.title); }}>{dictionary.btn_book}</a>
                    <a href="#" className="trial-btn enquire" onClick={(e) => { e.preventDefault(); handleEnquiryClick(item.title); }}>{dictionary.btn_enquire}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="trial-faq-section">
              {dictionary.faq.map((faq: any, index: number) => (
                <div key={index} className="trial-faq-item">
                  <h4 className="trial-faq-question">{faq.question}</h4>
                  <p className="trial-faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="trial-pricing-sidebar" ref={formRef}>
            <div className="trial-booking-form">
              <div className="trial-booking-form-header">
                 <a 
                  href="#" 
                  className={`trial-btn ${activeTab === 'appointment' ? '' : 'enquire'}`} 
                  style={{ flex: 1 }}
                  onClick={(e) => { e.preventDefault(); setActiveTab('appointment'); }}
                >
                  {dictionary.form.tab_book}
                </a>
                <a 
                  href="#" 
                  className={`trial-btn ${activeTab === 'enquiry' ? '' : 'enquire'}`} 
                  style={{ flex: 1 }}
                  onClick={(e) => { e.preventDefault(); setActiveTab('enquiry'); }}
                >
                  {dictionary.form.tab_enquire}
                </a>
              </div>

               {activeTab === 'appointment' && (
                <form onSubmit={handleAppointmentSubmit}>
                  <div className="trial-form-field" style={{ display: "none" }} aria-hidden="true">
                    <label>Website</label>
                    <input type="text" name="website" autoComplete="off" tabIndex={-1} />
                  </div>
                  <div className="trial-form-field">
                    <input name="name" type="text" placeholder={dictionary.form.name_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <input name="phone" type="tel" placeholder={dictionary.form.phone_placeholder} />
                  </div>
                  <div className="trial-form-field">
                    <input name="email" type="email" placeholder={dictionary.form.email_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <select name="service" required value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                      <option value="">{dictionary.form.option_placeholder}</option>
                      {combinedPricing.map((p: any) => (
                        <option key={p.title} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="trial-form-field">
                    <input name="date" type="date" placeholder={dictionary.form.date_placeholder} />
                  </div>
                  <button type="submit" className="trial-submit-btn" disabled={isSubmittingAppointment}>
                    {isSubmittingAppointment ? dictionary.form.loading_label : dictionary.form.submit_button}
                  </button>
                  {appointmentMessage ? <p className="mt-3 mb-0">{appointmentMessage}</p> : null}
                </form>
              )}

              {activeTab === 'enquiry' && (
                <form onSubmit={handleEnquirySubmit}>
                  <div className="trial-form-field" style={{ display: "none" }} aria-hidden="true">
                    <label>Website</label>
                    <input type="text" name="website" autoComplete="off" tabIndex={-1} />
                  </div>
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
                    <select name="enquiryService" value={enquiryService} onChange={(e) => setEnquiryService(e.target.value)} required>
                      <option value="">{dictionary.form.option_placeholder}</option>
                      {combinedPricing.map((p: any) => (
                        <option key={p.title} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="trial-form-field">
                    <textarea name="notes" placeholder={dictionary.form.notes_placeholder}></textarea>
                  </div>
                  <button type="submit" className="trial-submit-btn" disabled={isSubmittingEnquiry}>
                    {isSubmittingEnquiry ? dictionary.form.loading_label : dictionary.form.enquiry_submit_button}
                  </button>
                  {enquiryMessage ? <p className="mt-3 mb-0">{enquiryMessage}</p> : null}
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
