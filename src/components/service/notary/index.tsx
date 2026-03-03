
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import NotaryArea from "./NotaryArea";
import ServicePageHeader from "../ServicePageHeader";

export default function Notary() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/dubai-courts-logo.webp"
            logoAlt="Notary Public"
            title="Notary Public"
            subtitle="Book legal appointments and get government certified true copies."
          />
          <NotaryArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
