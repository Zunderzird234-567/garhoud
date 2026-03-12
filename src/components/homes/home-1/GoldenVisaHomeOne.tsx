"use client";
import Link from "next/link";

export default function GoldenVisaHomeOne({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <section className="azzle-section-padding-bottom">
      <div className="container">
        <div className="golden-visa-home" data-aos="fade-up" data-aos-delay="400">
          <div className="golden-visa-home__content">
            <span className="golden-visa-home__eyebrow">{dictionary.eyebrow}</span>
            <h2>{dictionary.title}</h2>
            <p>{dictionary.description}</p>
            <div className="golden-visa-home__benefits">
              {dictionary.benefits.map((benefit: string, index: number) => (
                <div key={index} className="golden-visa-home__benefit">
                  <span className="golden-visa-home__benefit-mark">+</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <Link href={`/${lang}/service/golden-visa`} className="golden-visa-home__cta">
              {dictionary.cta}
            </Link>
          </div>
          <div className="golden-visa-home__media" data-aos="zoom-in" data-aos-delay="600">
            <div className="golden-visa-home__logo-card">
              <img src="/assets/images/service/golden-visa.webp" alt="Golden Visa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
