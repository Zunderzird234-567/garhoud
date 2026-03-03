
import { Suspense } from "react";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FaqHomeOne from "../homes/home-1/FaqHomeOne";
import ServiceTabs from "./ServiceTabs";
import AboutCta from "../about-us/AboutCta";



export default function Service() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <section className="azzle-section-padding pb-0">
            <div className="container">
              <div className="azzle-section-title center max-width-780" data-aos="fade-up" data-aos-delay="500">
                <h2>A World of Services at Your Fingertips</h2>
              </div>
            </div>
          </section>
          <Suspense fallback={<div>Loading...</div>}>
            <ServiceTabs />
          </Suspense>
          <FaqHomeOne />
          <AboutCta />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
