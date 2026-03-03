"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function FooterOne({ dictionary, lang }: { dictionary: any, lang: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

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
                <a href="mailto:info@algarhoudcenter.ae">
                  <span>{dictionary.email_label}</span> info@algarhoudcenter.ae
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
