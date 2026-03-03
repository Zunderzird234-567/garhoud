
"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  website: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  website: "",
};

export default function ContactArea({ dictionary, lang }: { dictionary: any; lang: string }) {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const router = useRouter();

  const isSubmitting = status === "loading";
  const statusMessage = useMemo(() => {
    if (status === "success") return dictionary.form.success_message;
    if (status === "error") return dictionary.form.error_message;
    return "";
  }, [dictionary.form.error_message, dictionary.form.success_message, status]);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setFormData(INITIAL_FORM);
      setStatus("success");
      window.setTimeout(() => {
        router.push(`/${lang}/thank-you`);
      }, 600);
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <div className="azzle-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="azzle-default-content pr70" data-aos="fade-up" data-aos-delay="700">
              <h2>{dictionary.title}</h2>
              <p className="mb-0">{dictionary.desc}</p>
              <div className="mt-50">
                <div className="azzle-contact-info-wrap">
                  <div className="azzle-contact-info-item">
                    <h5>{dictionary.email_label}</h5>
                    <a href="mailto:info@algarhoudcenter.ae">info@algarhoudcenter.ae</a>
                  </div>
                  <div className="azzle-contact-info-item">
                    <h5>{dictionary.phone_label}</h5>
                    <a href="tel:043991744">04 399 1744</a>
                  </div>
                  <div className="azzle-contact-info-item">
                    <h5>{dictionary.follow_label}</h5>
                    <div className="azzle-social-wrap2 social-hover-orange">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com">
                            <img src="/assets/images/home2/facebook.svg" alt="Icon" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com">
                            <img src="/assets/images/home2/twitter.svg" alt="Icon" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com">
                            <img src="/assets/images/home2/insta.svg" alt="Icon" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com">
                            <img src="/assets/images/home2/in.svg" alt="Icon" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="azzle-contact-box" data-aos="fade-up" data-aos-delay="900">
              <form onSubmit={handleSubmit}>
                <div className="azzle-contact-field" style={{ display: "none" }} aria-hidden="true">
                  <label>Website</label>
                  <input
                    type="text"
                    name="website"
                    autoComplete="off"
                    tabIndex={-1}
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
                <div className="azzle-contact-column">
                  <div className="azzle-contact-field">
                    <label>{dictionary.form.name_label}</label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder={dictionary.form.name_placeholder}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="azzle-contact-field">
                    <label>{dictionary.form.email_label}</label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder={dictionary.form.email_placeholder}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="azzle-contact-column">
                  <div className="azzle-contact-field">
                    <label>{dictionary.form.phone_label}</label>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder={dictionary.form.phone_placeholder}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="azzle-contact-field">
                    <label>{dictionary.form.company_label}</label>
                    <input
                      type="text"
                      name="company"
                      autoComplete="organization"
                      placeholder={dictionary.form.company_placeholder}
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="azzle-contact-field">
                  <label>{dictionary.form.message_label}</label>
                  <textarea
                    name="message"
                    placeholder={dictionary.form.message_placeholder}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button id="azzle-main-submit-btn" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? dictionary.form.loading_label : dictionary.form.cta}
                </button>
                {statusMessage ? <p className="mt-3 mb-0">{statusMessage}</p> : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
