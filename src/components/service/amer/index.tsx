
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AmerArea from "./AmerArea";
import ServicePageHeader from "../ServicePageHeader";

export default function Amer({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/amer-logo.webp"
            logoAlt="Amer"
            title={dictionary.amer_page.header_title}
            subtitle={dictionary.amer_page.header_subtitle}
          />
          <AmerArea dictionary={dictionary.amer_page} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
