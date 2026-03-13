"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function FooterOne({ dictionary, lang }: { dictionary: any, lang: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const serviceLogos = [
    { title: "DHA", path: `/${lang}/service/dha`, logo: "/assets/images/service/DHA-logo.webp" },
    { title: "Typing", path: `/${lang}/service/typing`, logo: "/assets/images/service/typing-logo.webp" },
    { title: "Amer", path: `/${lang}/service/amer`, logo: "/assets/images/service/amer-logo.webp" },
    { title: "DET", path: "https://eservices.dubaided.gov.ae/pages/anon/gsthme.aspx?dedqs=PM671p6QBb0lV1okx2JABgxoLLKXOgPx", logo: "/assets/images/service/det-logo.webp" },
    { title: "Tawjeeh", path: `/${lang}/service/tawjeeh`, logo: "/assets/images/service/t3-logo.webp" },
    { title: "Notary", path: `/${lang}/service/notary`, logo: "/assets/images/service/dubai-courts-logo.webp" },
    { title: "Salem", path: `/${lang}/service/salem`, logo: "/assets/images/service/salem.jpg" },
    { title: "Golden Visa", path: `/${lang}/service/golden-visa`, logo: "/assets/images/service/golden-visa.webp" },
    { title: "Business Setup", path: `/${lang}/service/business-setup`, logo: "/assets/images/service/business.jpg" },
    { title: "Tax Consultancy", path: `/${lang}/service/tax-consultancy`, logo: "/assets/images/service/tax.jpg" },
    { title: "Accounting", path: `/${lang}/service/accounting`, logo: "/assets/images/service/accounting.jpg" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clear existing content to prevent duplication on HMR
    if (container.childNodes.length > dictionary.cta_items.length) {
      const originalChildren = Array.from(container.childNodes).slice(0, dictionary.cta_items.length);
      container.innerHTML = '';
      originalChildren.forEach(child => container.appendChild(child));
    }

    // Clone content for infinite scroll effect
    const clone = container.cloneNode(true);
    container.appendChild(clone);

    let scrollAmount = 0;
    let frameId: number;

    const marqueeScroll = () => {
      if (!isPaused && container) {
        scrollAmount += 1; // speed
        container.style.transform = `translateX(-${scrollAmount}px)`;

        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
      frameId = requestAnimationFrame(marqueeScroll);
    };

    frameId = requestAnimationFrame(marqueeScroll);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused, dictionary.cta_items]);

  return (
    <footer className="azzle-footer-section">
      {/* Shape */}
      <div className="azzle-footer-shape">
        <img src="/assets/images/home1/footer-shape.png" alt="shape" />
      </div>

      {/* CTA Slider */}
      <div
        className="azzle-footer-top inner-mwrquee-wra overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="azzle-cta-slider-init flex"
          ref={containerRef}
          style={{
            display: "inline-flex",
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {dictionary.cta_items.map((title: string, i: number) => (
            <div key={i} className="azzle-cta-slider-item flex items-center px-6">
              <img src="/assets/images/home1/star.svg" alt="Icon" />
              <div className="azzle-cta-slider-title">{title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer content */}
      <div className="container">
        <div className="azzle-footer-one">
          <div className="row">
            
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="azzle-footer-textarea">
                <Link href={`/${lang}`}>
                  <img src="/assets/images/logo/logo-dark.svg" alt="Logo" style={{ width: '200px' }} />
                </Link>
                <p>{dictionary.description}</p>
                <a href="https://maps.app.goo.gl/7z1VGE9FZgaZZAaL9" target="_blank" rel="noopener noreferrer">
                  <span>{dictionary.address_label}</span> {dictionary.address_value}
                </a>
                <a href="mailto:info@algarhoudamercenter.ae">
                  <span>{dictionary.email_label}</span> info@algarhoudamercenter.ae
                </a>
                <a href="tel:043991744">
                  <span>{dictionary.phone_label}</span> 04 399 1744
                </a>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-4">
              <div className="azzle-footer-menu pl-30">
                <h4>{dictionary.pages_title}</h4>
                <ul>
                  {dictionary.pages_links.map((link: any, i: number) => (
                    <li key={i}><Link href={`/${lang}${link.path}`}>{link.title}</Link></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-4">
              <div className="azzle-footer-menu pl-70">
                <h4>{dictionary.services_title}</h4>
                <ul>
                    {dictionary.services_links.map((link: any, i: number) => (
                      <li key={i}>
                        {link.path.startsWith('http') ? (
                          <a href={link.path} target="_blank" rel="noopener noreferrer">{link.title}</a>
                        ) : (
                          <Link href={`/${lang}${link.path}`}>{link.title}</Link>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-4">
              <div className="azzle-footer-menu mb-0">
                <h4>{dictionary.subscribe_title}</h4>
                <div className="azzle-subscribe-field">
                  <input type="email" placeholder={dictionary.subscribe_placeholder} />
                  <button className="sub-btn" type="submit">
                    <img src="/assets/images/home1/arrow-white.svg" alt="Icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-service-logos">
            {serviceLogos.map((service) => {
              const logoCard = (
                <div className="footer-service-logos__item">
                  <img
                    src={service.logo}
                    alt={service.title}
                    className="footer-service-logos__image"
                  />
                </div>
              );

              return service.path.startsWith("http") ? (
                <a key={service.title} href={service.path} target="_blank" rel="noopener noreferrer">
                  {logoCard}
                </a>
              ) : (
                <Link key={service.title} href={service.path}>
                  {logoCard}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="azzle-footer-bottom-text">
          <p>
            {dictionary.copyright} <a href="https://maamritat.com/" target="_blank" rel="noopener noreferrer">Maamritat</a>
          </p>
          
        </div>
      </div>
    </footer>
  );
}
