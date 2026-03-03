
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import SalemArea from "./SalemArea";
import ServicePageHeader from "../ServicePageHeader";

export default function Salem() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/salem.jpg"
            logoAlt="Salem"
            title="Salem"
            subtitle="Occupational health screening and all medical fitness services."
          />
          <SalemArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
