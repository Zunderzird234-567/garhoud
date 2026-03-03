
"use client";
import { useState } from "react";
import Link from "next/link"; 
 

interface FaqItem {
  id: number;
  q: string;
  a: string;
}

interface StyleProps {
  style_2?: boolean;
  dictionary: any;
  lang: string;
}

export default function FaqHomeOne({ style_2 = false, dictionary, lang }: StyleProps) {
  const [activeId, setActiveId] = useState<number>(1); 

  const toggleFaq = (index: number) => {
      if (activeId === index) {
      setActiveId(-1);
    } else {
      setActiveId(index);
    }
  };

  const faq_data: FaqItem[] = dictionary.questions;

  return (
    <section className={`${style_2 ? 'azzle-section-padding6' : 'azzle-section-padding pt-0'}`}>
      <div className="container">
        <div className="row"> 
          <div className="col-lg-6">
            <div
              className="azzle-default-content"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h2>{dictionary.title}</h2>
              <p>
                {dictionary.desc}
              </p>
              <div className="mt-50">
                <a
                  className="azzle-default-btn"
                  data-aos="fade-up"
                  data-aos-delay="700"
                  href="https://wa.me/9710557093431"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-text={dictionary.cta}
                >
                  <span className="button-wraper">{dictionary.cta}</span>
                </a>
              </div>
            </div>
          </div>

          {/* FAQ items */}
          <div className="col-lg-5 offset-lg-1">
            <div
              className="azzle-faq-wrap1"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              {faq_data.map((faq) => (
                <div
                  key={faq.id}
                  className={`azzle-faq-item ${
                    activeId === faq.id ? "open" : ""
                  }`}
                >
                  <div
                    className="azzle-faq-header"
                    onClick={() => toggleFaq(faq.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>{faq.q}</h3>
                    <div className="azzle-active-icon">
                      <img
                        src="/assets/images/home1/+.svg"
                        alt="toggle"
                        style={{
                          transform:
                            activeId === faq.id ? "rotate(45deg)" : "rotate(0)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                  {activeId === faq.id && (
                    <div className="azzle-faq-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
