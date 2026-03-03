
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AboutArea from "./AboutArea";
import AboutCounter from "./AboutCounter";
import SolutionsArea from "./SolutionsArea";
import OurWorkArea from "./OurWorkArea";
import AboutCta from "./AboutCta";
import FooterOne from "@/layouts/footers/FooterOne";
import DividerArea from "@/common/DividerArea";

export default function Aboutus({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <AboutArea dictionary={dictionary.about_us_page} />
          <AboutCounter dictionary={dictionary.about_us_page} />
          <DividerArea className="divider-about-us" dividerClass="divider2" />
          <OurWorkArea dictionary={dictionary.about_us_page} />
          <SolutionsArea dictionary={dictionary.about_us_page} />
          <AboutCta dictionary={dictionary.about_cta} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />         
        </div>
      </div>
    </Wrapper>
  )
}
