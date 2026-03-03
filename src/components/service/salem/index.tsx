
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import SalemArea from "./SalemArea";
import ServicePageHeader from "../ServicePageHeader";

export default function Salem({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/salem.jpg"
            logoAlt="Salem"
            title={dictionary.salem_page.header_title}
            subtitle={dictionary.salem_page.header_subtitle}
          />
          <SalemArea dictionary={dictionary.salem_page} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
