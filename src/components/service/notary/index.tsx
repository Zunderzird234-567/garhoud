
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import NotaryArea from "./NotaryArea";
import ServicePageHeader from "../ServicePageHeader";

export default function Notary({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/dubai-courts-logo.webp"
            logoAlt="Notary Public"
            title={dictionary.notary_page.header_title}
            subtitle={dictionary.notary_page.header_subtitle}
          />
          <NotaryArea dictionary={dictionary.notary_page} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
