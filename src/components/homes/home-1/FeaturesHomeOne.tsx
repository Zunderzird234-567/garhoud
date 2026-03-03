"use client";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

const settings = {
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  arrows: false,
  pauseOnHover: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const brand_logos = [
  { src: "/assets/images/home1/brand-01.jpg", alt: "Antar" },
  { src: "/assets/images/home1/brand-02.jpg", alt: "New Punjab Carpentry" },
  { src: "/assets/images/home1/brand-03.jpg", alt: "VIP Plus Real Estate" },
  { src: "/assets/images/home1/brand-04.jpg", alt: "Atlas" },
  { src: "/assets/images/home1/brand-05.jpg", alt: "Emirates Auction" },
  { src: "/assets/images/home1/brand-06.jpg", alt: "Uber" },
  { src: "/assets/images/home1/brand-07.jpg", alt: "Noon" },
  { src: "/assets/images/home1/brand-08.jpg", alt: "Jumbo" },
  { src: "/assets/images/home1/brand-09.jpg", alt: "Innovations Group" },
  { src: "/assets/images/home1/brand-10.jpg", alt: "Dulsco" },
  { src: "/assets/images/home1/brand-11.jpg", alt: "Nesto" },
];

export default function FeaturesHomeOne({ dictionary, lang }: { dictionary: any, lang: string }) {
  const isExternal = (path: string) => path.startsWith('http');

  const ServiceLink = ({ service, children }: { service: any, children: React.ReactNode }) => {
    if (isExternal(service.link)) {
      return (
        <a href={service.link} target="_blank" rel="noopener noreferrer" className="azzle-iconbox-wrap">
          {children}
        </a>
      );
    }
    return (
      <Link href={`/${lang}${service.link}`} className="azzle-iconbox-wrap">
        {children}
      </Link>
    );
  };

  return (
    <section className="azzle-section-padding-bottom">
      <div className="container azzle-section-padding">
        <div className="azzle-section-title max-width-780" data-aos="fade-left" data-aos-delay="500">
          <h2>{dictionary.title}</h2>
        </div>
        <div className="azzle-iconbox-wrapper" data-aos="fade-up" data-aos-delay="700">
          <div className="azzle-iconbox-column">
            {dictionary.services.map((service: any, i: number) => (
              <ServiceLink key={i} service={service}>
                <div className="azzle-iconbox-icon">
                  <img src={service.logo} alt={service.title} style={{ height: '120px' }} />
                </div>
                <div className="azzle-iconbox-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
                <div className="azzle-iconbox-button">
                  <span>
                    {dictionary.view_services}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 26 22" fill="none">
                      <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </ServiceLink>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="azzle-brand-slider-wraper py-10" data-aos="fade-up" data-aos-delay=".9s">
          <div className="azzle-brand-slider-title">
            <p>{dictionary.clientele_title}</p>
          </div>
          <Slider {...settings} className="azzle-brand-slider">
            {brand_logos.map((logo, i) => (
              <div key={i} className="azzle-logo-icon-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={80}
                  style={{ objectFit: 'contain' }}
                  unoptimized={true}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
