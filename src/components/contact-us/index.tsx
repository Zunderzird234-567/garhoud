
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ContactArea from "./ContactArea";

 

export default function Contactus() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ContactArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
