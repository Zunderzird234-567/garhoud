
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AccountingArea from "./AccountingArea";
import ServicePageHeader from "../ServicePageHeader";

export default function Accounting({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/accounting.jpg"
            logoAlt="Accounting Services"
            title={dictionary.accounting_page.header_title}
            subtitle={dictionary.accounting_page.header_subtitle}
          />
          <AccountingArea dictionary={dictionary.accounting_page} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
