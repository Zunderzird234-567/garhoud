
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TypingArea from "./TypingArea";
import ServicePageHeader from "../ServicePageHeader";

export default function Typing({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/typing-logo.webp"
            logoAlt="Typing"
            title={dictionary.typing_page.header_title}
            subtitle={dictionary.typing_page.header_subtitle}
          />
          <TypingArea dictionary={dictionary.typing_page} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
