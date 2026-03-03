"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';

const serviceImages: { [key: string]: string } = {
  dha: "/assets/images/service/DHA-logo.webp",
  typing: "/assets/images/service/typing-logo.webp",
  amer: "/assets/images/service/amer-logo.webp",
  det: "/assets/images/service/det-logo.webp",
  tawjeeh: "/assets/images/service/t3-logo.webp",
  notary: "/assets/images/service/dubai-courts-logo.webp",
  salem: "/assets/images/service/salem.jpg",
  "business-setup": "/assets/images/service/business.jpg",
  "tax-consultancy": "/assets/images/service/tax.jpg",
  accounting: "/assets/images/service/accounting.jpg",
};


export default function ServiceTabs({ dictionary }: { dictionary: any[] }) {
  const serviceData = useMemo(() => dictionary.map((service, index) => ({
    ...service,
    id: index + 1,
    image: serviceImages[service.key],
  })), [dictionary]);

  const [activeTab, setActiveTab] = useState(1);
  const searchParams = useSearchParams();

  useEffect(() => {
    const tabKey = searchParams.get('tab');
    if (tabKey && tabKey !== 'det') {
      const service = serviceData.find(s => s.key === tabKey);
      if (service) {
        setActiveTab(service.id);
      }
    }
  }, [searchParams, serviceData]);

  const activeService = serviceData.find((service) => service.id === activeTab);

  return (
    <section className="azzle-section-padding pt-0">
      <div className="container">
        <div className="service-tabs-container" data-aos="fade-up" data-aos-delay="700">
          <div className="service-tabs-nav">
            {serviceData.map((service) => {
              if (service.key === 'det') {
                return (
                  <a
                    key={service.id}
                    href="https://eservices.dubaided.gov.ae/pages/anon/gsthme.aspx?dedqs=PM671p6QBb0lV1okx2JABgxoLLKXOgPx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-tab-item"
                  >
                    {service.title}
                  </a>
                );
              }
              return (
                <button
                  key={service.id}
                  className={`service-tab-item ${activeTab === service.id ? "active" : ""}`}
                  onClick={() => setActiveTab(service.id)}
                >
                  {service.title}
                </button>
              );
            })}
          </div>
          <div className="service-tabs-content">
            {activeService && (
              <>
                <div className="service-content-image">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    width={150}
                    height={150}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3>{activeService.title}</h3>
                <p>{activeService.content}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
