"use client";
import { Check } from "lucide-react";

export default function TrialPricingArea({ dictionary }: { dictionary: any }) {

  const pricingData = dictionary.pricing;
  const faqData = dictionary.faq;
  const formDict = dictionary.form;

  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <div className="trial-pricing-grid">
              {pricingData.map((item: any, index: number) => (
                <div key={index} className="trial-pricing-card">
                  <h3>{item.title}</h3>
                  <div className="trial-pricing-details">
                    <span>{dictionary.gov_fee_label}</span>
                    <span>{item.govFee.toFixed(1)}</span>
                  </div>
                  <div className="trial-pricing-details">
                    <span>{dictionary.typing_fee_label}</span>
                    <span>{item.typingFee.toFixed(1)}</span>
                  </div>
                  <div className="trial-pricing-details">
                    <strong>{dictionary.total_fee_label}</strong>
                    <strong>{item.total.toFixed(1)}</strong>
                  </div>
                  <div className="trial-pricing-buttons">
                    <a href="#" className="trial-btn">{dictionary.book_button}</a>
                    <a href="#" className="trial-btn enquire">{dictionary.enquire_button}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="trial-additional-info">
              {dictionary.additional_info.map((info: string, index: number) => (
                <div key={index} className="trial-info-item">
                  <Check size={20} />
                  <span>{info}</span>
                </div>
              ))}
            </div>

            <div className="trial-faq-section">
              {faqData.map((faq: any, index: number) => (
                <div key={index} className="trial-faq-item">
                  <h4 className="trial-faq-question">{faq.question}</h4>
                  <p className="trial-faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="trial-pricing-sidebar">
            <div className="trial-booking-form">
              <div className="trial-booking-form-header">
                <a href="#" className="trial-btn" style={{ flex: 1 }}>{formDict.tab_book}</a>
                <a href="#" className="trial-btn enquire" style={{ flex: 1 }}>{formDict.tab_enquire}</a>
              </div>
              <form>
                <div className="trial-form-field">
                  <input type="text" placeholder={formDict.name_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <input type="tel" placeholder={formDict.phone_placeholder} />
                </div>
                <div className="trial-form-field">
                  <input type="email" placeholder={formDict.email_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <select required defaultValue="">
                    <option value="">{formDict.option_placeholder}</option>
                    {pricingData.map((item: any) => (
                       <option key={item.title} value={item.title}>{item.title}</option>
                    ))}
                  </select>
                </div>
                <div className="trial-form-field">
                  <input type="date" placeholder={formDict.date_placeholder} />
                </div>
                <button type="submit" className="trial-submit-btn">{formDict.submit_button}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
