
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import DhaArea from "./DhaArea";
import ServicePageHeader from "../ServicePageHeader";

export default function Dha({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/DHA-logo.webp"
            logoAlt="DHA"
            title={dictionary.dha_page.header_title}
            subtitle={dictionary.dha_page.header_subtitle}
          />
          <DhaArea dictionary={dictionary.dha_page} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
