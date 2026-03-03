"use client";
import Link from "next/link";
import Slider from "react-slick";
import { useRef } from "react";

const sliderData = [
  {
    id: 1,
    titleKey: "slide1_title",
    descriptionKey: "slide1_desc",
    image: "/assets/images/slider/1.jpg",
    hint: "dubai skyline"
  },
  {
    id: 2,
    titleKey: "slide2_title",
    descriptionKey: "slide2_desc",
    image: "/assets/images/slider/2.jpg",
    hint: "customer service"
  },
  {
    id: 3,
    titleKey: "slide3_title",
    descriptionKey: "slide3_desc",
    image: "/assets/images/slider/3.jpg",
    hint: "dubai government"
  }
];

export default function HeroHomeOne({ dictionary, lang }: { dictionary: any, lang: string }) {
  const sliderRef = useRef<Slider | null>(null);
  const isRtl = lang === 'ar';

  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: !isRtl,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    rtl: isRtl
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="azzle-hero-section">
      <div className="container">
        <div className="hero-slider-wrapper">
          <Slider ref={sliderRef} {...heroSliderSettings} className="hero-slider">
            {sliderData.map((slide) => (
              <div key={slide.id} className="hero-slide-item">
                <div className="hero-slide-image" style={{ backgroundImage: `url(${slide.image})` }} data-ai-hint={slide.hint}></div>
                <div className="azzle-hero-content1">
                    <h1 data-aos="fade-left" data-aos-delay="500">{dictionary[slide.titleKey]}</h1>
                    <p data-aos="zoom-in" data-aos-delay="700" style={{ fontWeight: 100 }}>{dictionary[slide.descriptionKey]}</p>
                    <div className="azzle-hero-button mt-50">
                      <Link className="azzle-default-btn" data-aos="fade-up" data-aos-delay="900" href={`/${lang}/contact-us`} data-text={dictionary.get_started}>
                        <span className="button-wraper">{dictionary.get_started}</span>
                      </Link>
                      <Link className="azzle-default-btn outline-btn" data-aos="fade-up" data-aos-delay="1000" href={`/${lang}/about-us`} data-text={dictionary.learn_more}>
                        <span className="button-wraper">{dictionary.learn_more}</span>
                      </Link>
                    </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="hero-arrow hero-prev" onClick={previous}></div>
          <div className="hero-arrow hero-next" onClick={next}></div>
        </div>
      </div>
    </div>
  )
}
