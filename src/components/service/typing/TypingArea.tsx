
"use client";
import { useMemo, useRef, useState } from "react";
import { useSubmitContactForm } from "@/hooks/useSubmitContactForm";

export default function TypingArea({ dictionary }: { dictionary: any }) {
  const [selectedDocumentType, setSelectedDocumentType] = useState("");
  const [activeTab, setActiveTab] = useState('register');
  const [enquiryService, setEnquiryService] = useState('');
  const formRef = useRef<HTMLDivElement>(null);
  const {
    status: registerStatus,
    isSubmitting: isRegistering,
    submit: submitRegister,
  } = useSubmitContactForm();
  const {
    status: enquiryStatus,
    isSubmitting: isEnquiring,
    submit: submitEnquiry,
  } = useSubmitContactForm();

  const registerMessage = useMemo(() => {
    if (registerStatus === "success") return dictionary.form.success_message;
    if (registerStatus === "error") return dictionary.form.error_message;
    return "";
  }, [dictionary.form.error_message, dictionary.form.success_message, registerStatus]);

  const enquiryMessage = useMemo(() => {
    if (enquiryStatus === "success") return dictionary.form.success_message;
    if (enquiryStatus === "error") return dictionary.form.error_message;
    return "";
  }, [dictionary.form.error_message, dictionary.form.success_message, enquiryStatus]);

  const handleRegisterClick = (serviceTitle: string) => {
    setSelectedDocumentType(serviceTitle);
    setActiveTab('register');
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

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegistering) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => (data.get(key) || "").toString().trim();

    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const documentType = get("documentType");
    const notes = get("notes");
    const file = data.get("document");
    const fileName = file instanceof File && file.name ? file.name : "";

    const messageLines = [
      documentType ? `Document type: ${documentType}` : null,
      notes ? `Notes: ${notes}` : null,
      fileName ? `File selected: ${fileName}` : null,
    ].filter(Boolean);

    const ok = await submitRegister(
      {
        name,
        email,
        phone,
        message: messageLines.join("\n") || "Typing registration request.",
        website: get("website"),
        formType: dictionary.form.tab_register,
        service: dictionary.header_title || "Typing Services",
      },
      form
    );

    if (ok) {
      setSelectedDocumentType("");
    }
  };

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEnquiring) return;

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
        message: messageLines.join("\n") || "Typing service enquiry.",
        website: get("website"),
        formType: dictionary.form.tab_enquire,
        service: service || dictionary.header_title || "Typing Services",
      },
      form
    );

    if (ok) {
      setEnquiryService("");
    }
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <div className="trial-pricing-grid">
              {dictionary.services.map((item: any, index: number) => (
                <div key={index} className="trial-pricing-card">
                  <h3>{item.title}</h3>
                  <div className="trial-pricing-buttons" style={{marginTop: '2rem'}}>
                    <a href="#" className="trial-btn" onClick={(e) => { e.preventDefault(); handleRegisterClick(item.title); }}>{dictionary.btn_register}</a>
                    <a href="#" className="trial-btn enquire" onClick={(e) => { e.preventDefault(); handleEnquiryClick(item.title); }}>{dictionary.btn_enquire}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="trial-pricing-sidebar" ref={formRef}>
            <div className="trial-booking-form">
              <div className="trial-booking-form-header">
                 <a 
                  href="#" 
                  className={`trial-btn ${activeTab === 'register' ? '' : 'enquire'}`} 
                  style={{ flex: 1 }}
                  onClick={(e) => { e.preventDefault(); setActiveTab('register'); }}
                >
                  {dictionary.form.tab_register}
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

               {activeTab === 'register' && (
                <form onSubmit={handleRegisterSubmit}>
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
                    <input name="phone" type="tel" placeholder={dictionary.form.phone_placeholder} required/>
                  </div>
                  <div className="trial-form-field">
                    <select name="documentType" required value={selectedDocumentType} onChange={(e) => setSelectedDocumentType(e.target.value)}>
                      <option value="">{dictionary.form.document_type_placeholder}</option>
                      {dictionary.services.map((p: any) => (
                        <option key={p.title} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="trial-form-field">
                     <label style={{marginBottom: '8px', display: 'block', color: '#555', fontSize: '0.9rem'}}>{dictionary.form.upload_label}</label>
                    <input name="document" type="file" />
                  </div>
                  <div className="trial-form-field">
                    <textarea name="notes" placeholder={dictionary.form.notes_placeholder}></textarea>
                  </div>
                  <button type="submit" className="trial-submit-btn" disabled={isRegistering}>
                    {isRegistering ? dictionary.form.loading_label : dictionary.form.submit_button}
                  </button>
                  {registerMessage ? <p className="mt-3 mb-0">{registerMessage}</p> : null}
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
                      <option value="">{dictionary.form.enquiry_option_placeholder}</option>
                      {dictionary.services.map((p: any) => (
                        <option key={p.title} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="trial-form-field">
                    <textarea name="notes" placeholder={dictionary.form.notes_placeholder}></textarea>
                  </div>
                  <button type="submit" className="trial-submit-btn" disabled={isEnquiring}>
                    {isEnquiring ? dictionary.form.loading_label : dictionary.form.enquiry_button}
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
