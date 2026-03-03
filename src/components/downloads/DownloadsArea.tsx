
"use client";

import { FileDown } from "lucide-react";

export default function DownloadsArea({ dictionary }: { dictionary: any }) {
  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="azzle-section-title center max-width-780" data-aos="fade-up" data-aos-delay="500">
          <h2>{dictionary.title}</h2>
        </div>
        <div className="downloads-grid-container">
          {dictionary.items.map((item: any, i: number) => (
            <div
              key={item.id}
              className="download-card"
              data-aos="fade-up"
              data-aos-delay={300 + i * 200}
            >
              <div className="download-card-icon">
                <FileDown size={32} strokeWidth={1.5} />
              </div>
              <div className="download-card-main">
                <div className="download-card-content">
                  <h3 className="download-card-title">{item.title}</h3>
                  <p className="download-card-description">{item.description}</p>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-card-button"
                >
                  View PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
