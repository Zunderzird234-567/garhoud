
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import BusinessSetupArea from "./BusinessSetupArea";
import ServicePageHeader from "../ServicePageHeader";

export default function BusinessSetup({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/business.jpg"
            logoAlt="Business Setup"
            title={dictionary.business_setup_page.header_title}
            subtitle={dictionary.business_setup_page.header_subtitle}
          />
          <BusinessSetupArea dictionary={dictionary.business_setup_page} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
