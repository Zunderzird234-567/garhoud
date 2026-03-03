
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import DhaArea from "./DhaArea";
import ServicePageHeader from "../ServicePageHeader";

export default function Dha() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/DHA-logo.webp"
            logoAlt="DHA"
            title="Dubai Health (DHA)"
            subtitle="Medical fitness typing and all necessary approvals handled seamlessly."
          />
          <DhaArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
