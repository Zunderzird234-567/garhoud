
"use client";
import { useMemo, useState } from "react";
import { useSubmitContactForm } from "@/hooks/useSubmitContactForm";

const TawjeehProcessStep = ({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) => (
  <div className="tawjeeh-process-step">
    <div className="tawjeeh-process-step-number">{step}</div>
    <div className="tawjeeh-process-step-content">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export default function TawjeehArea({ dictionary }: { dictionary: any }) {
  const [activeTab, setActiveTab] = useState("appointment");
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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmittingAppointment) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => (data.get(key) || "").toString().trim();

    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const date = get("date");

    const messageLines = [
      date ? `Preferred date: ${date}` : null,
    ].filter(Boolean);

    await submitAppointment(
      {
        name,
        email,
        phone,
        message: messageLines.join("\n") || "Tawjeeh appointment request.",
        website: get("website"),
        formType: dictionary.form.tab_book,
        service: dictionary.header_title || "Tawjeeh Services",
      },
      form
    );
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
    const notes = get("notes");

    await submitEnquiry(
      {
        name,
        email,
        phone,
        message: notes || dictionary.form.enquiry_text,
        website: get("website"),
        formType: dictionary.form.tab_enquire,
        service: dictionary.header_title || "Tawjeeh Services",
      },
      form
    );
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <h3 style={{ marginBottom: "2rem", fontSize: "2rem" }}>
              {dictionary.process_title}
            </h3>
            <div className="tawjeeh-process-wrapper">
              {dictionary.process_steps.map((item: any) => (
                <TawjeehProcessStep key={item.step} {...item} />
              ))}
            </div>

            <div className="trial-faq-section" style={{ marginTop: "4rem" }}>
              {dictionary.faq.map((faq: any, index: number) => (
                <div key={index} className="trial-faq-item">
                  <h4 className="trial-faq-question">{faq.question}</h4>
                  <div className="trial-faq-answer">
                    {faq.answer.split("\n").map((line: string, i: number) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="trial-pricing-sidebar">
            <div
              className="trial-booking-form"
              style={{ position: "sticky", top: "140px" }}
            >
              <div className="trial-booking-form-header">
                <a
                  href="#"
                  className={`trial-btn ${
                    activeTab === "appointment" ? "" : "enquire"
                  }`}
                  style={{ flex: 1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("appointment");
                  }}
                >
                  {dictionary.form.tab_book}
                </a>
                <a
                  href="#"
                  className={`trial-btn ${
                    activeTab === "enquiry" ? "" : "enquire"
                  }`}
                  style={{ flex: 1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("enquiry");
                  }}
                >
                  {dictionary.form.tab_enquire}
                </a>
              </div>

              {activeTab === "appointment" && (
                <form onSubmit={handleFormSubmit}>
                  <div className="trial-form-field" style={{ display: "none" }} aria-hidden="true">
                    <label>Website</label>
                    <input type="text" name="website" autoComplete="off" tabIndex={-1} />
                  </div>
                  <div className="trial-form-field">
                    <input type="text" name="name" placeholder={dictionary.form.name_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <input type="email" name="email" placeholder={dictionary.form.email_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <input type="tel" name="phone" placeholder={dictionary.form.phone_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <label
                      style={{
                        marginBottom: "8px",
                        display: "block",
                        color: "#555",
                        fontSize: "0.9rem",
                      }}
                    >
                      {dictionary.form.date_label}
                    </label>
                    <input type="date" name="date" required />
                  </div>
                  <button type="submit" className="trial-submit-btn" disabled={isSubmittingAppointment}>
                    {isSubmittingAppointment ? dictionary.form.loading_label : dictionary.form.submit_button}
                  </button>
                  {appointmentMessage ? <p className="mt-3 mb-0">{appointmentMessage}</p> : null}
                </form>
              )}
              {activeTab === "enquiry" && (
                <form onSubmit={handleEnquirySubmit}>
                  <p
                    style={{
                      textAlign: "center",
                      margin: "2rem 0",
                      color: "#555",
                      fontSize: "0.9rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {dictionary.form.enquiry_text}
                  </p>
                  <div className="trial-form-field" style={{ display: "none" }} aria-hidden="true">
                    <label>Website</label>
                    <input type="text" name="website" autoComplete="off" tabIndex={-1} />
                  </div>
                  <div className="trial-form-field">
                    <input type="text" name="name" placeholder={dictionary.form.name_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <input type="email" name="email" placeholder={dictionary.form.email_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <input type="tel" name="phone" placeholder={dictionary.form.phone_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <textarea name="notes" placeholder={dictionary.form.notes_placeholder}></textarea>
                  </div>
                  <button type="submit" className="trial-submit-btn">
                    {isSubmittingEnquiry ? dictionary.form.loading_label : dictionary.form.enquiry_button}
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
