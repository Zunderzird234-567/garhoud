"use client";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} milestone-arrow milestone-next`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} milestone-arrow milestone-prev`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default function OtherServicesCarousel({ dictionary, lang }: { dictionary: any, lang: string }) {
  const pathname = usePathname();
  const currentServicePath = pathname.split('/').pop();
  const sourceServices = dictionary.other_services.items ?? dictionary.features.services;
  
  // Filter out the current service from the carousel
  const services = sourceServices.filter((service: any) => service.key !== currentServicePath);
  
  const settings = {
    dots: true,
    infinite: services.length > 4, // Avoid infinite loop if not enough items
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    rtl: lang === 'ar',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="azzle-section-padding bg-light">
      <div className="container">
        <div className="azzle-section-title center" data-aos="fade-up">
          <h2>{dictionary.other_services.title}</h2>
        </div>
        <div className="other-services-carousel-wrapper" data-aos="fade-up" data-aos-delay="200">
          <Slider {...settings} className="other-services-carousel">
            {services.map((service: any, index: number) => {
              const isExternal = service.link.startsWith("http");
              const CardContent = (
                <div className="other-service-card">
                  <div className="other-service-card-icon">
                    <Image src={service.logo} alt={service.title} width={100} height={80} unoptimized style={{objectFit: 'contain'}} />
                  </div>
                  <h4 className="other-service-card-title">{service.title}</h4>
                </div>
              );

              const linkHref = isExternal ? service.link : `/${lang}${service.link}`;

              if (isExternal) {
                return (
                  <div key={index} style={{height: '100%'}}>
                    <a href={linkHref} target="_blank" rel="noopener noreferrer" style={{height: '100%', display: 'block'}}>
                      {CardContent}
                    </a>
                  </div>
                );
              }

              return (
                 <div key={index} style={{height: '100%'}}>
                    <Link href={linkHref} style={{height: '100%', display: 'block'}}>
                      {CardContent}
                    </Link>
                  </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
