
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AmerArea from "./AmerArea";
import ServicePageHeader from "../ServicePageHeader";

export default function Amer() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/amer-logo.webp"
            logoAlt="Amer"
            title="Amer Services"
            subtitle="Complete Amer services for visa renewal, cancellation, and modifications."
          />
          <AmerArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
