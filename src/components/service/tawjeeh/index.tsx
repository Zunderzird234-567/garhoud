
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TawjeehArea from "./TawjeehArea";
import ServicePageHeader from "../ServicePageHeader";

export default function Tawjeeh({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/t3-logo.webp"
            logoAlt="Taw-Jeeh"
            title={dictionary.tawjeeh_page.header_title}
            subtitle={dictionary.tawjeeh_page.header_subtitle}
          />
          <TawjeehArea dictionary={dictionary.tawjeeh_page} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
