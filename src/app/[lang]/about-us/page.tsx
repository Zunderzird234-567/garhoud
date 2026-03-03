
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AboutArea from "@/components/about-us/AboutArea";
import AboutCounter from "@/components/about-us/AboutCounter";
import SolutionsArea from "@/components/about-us/SolutionsArea";
import OurWorkArea from "@/components/about-us/OurWorkArea";
import AboutCta from "@/components/about-us/AboutCta";
import FooterOne from "@/layouts/footers/FooterOne";
import DividerArea from "@/common/DividerArea";
import { getDictionary } from "@/lib/get-dictionary";
import { i18n, Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function AboutUsPage({ params }: Props) {
  const { lang } = (await params) ?? { lang: i18n.defaultLocale };
  const dictionary = await getDictionary(lang);
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
