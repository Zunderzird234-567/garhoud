
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AccountingArea from "./AccountingArea";
import ServicePageHeader from "../ServicePageHeader";

export default function Accounting() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/accounting.jpg"
            logoAlt="Accounting Services"
            title="Accounting & Assurance"
            subtitle="Professional bookkeeping, auditing, and financial advisory services."
          />
          <AccountingArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
