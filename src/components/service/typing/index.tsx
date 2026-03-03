
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TypingArea from "./TypingArea";
import ServicePageHeader from "../ServicePageHeader";

export default function Typing() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/typing-logo.webp"
            logoAlt="Typing"
            title="Typing Services"
            subtitle="Accurate typing for visas, labor contracts, and various legal documents."
          />
          <TypingArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
