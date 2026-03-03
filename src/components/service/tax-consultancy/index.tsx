
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TaxConsultancyArea from "./TaxConsultancyArea";
import ServicePageHeader from "../ServicePageHeader";

export default function TaxConsultancy({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/tax.jpg"
            logoAlt="Tax Consultancy"
            title={dictionary.tax_consultancy_page.header_title}
            subtitle={dictionary.tax_consultancy_page.header_subtitle}
          />
          <TaxConsultancyArea dictionary={dictionary.tax_consultancy_page} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
