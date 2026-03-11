"use client";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

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
  const handleEnquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => (data.get(key) || "").toString().trim();

    const whatsappUrl = buildWhatsAppUrl([
      { label: "Service", value: dictionary.header_title || "Tawjeeh Services" },
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
