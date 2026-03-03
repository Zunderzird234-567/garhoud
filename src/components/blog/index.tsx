import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import BlogArea from "./BlogArea";
import type { Locale } from "@/i18n-config";

export default function Blog({ dictionary, lang }: { dictionary: any, lang: Locale }) {
  const pageDict = dictionary.blog_page;
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title={pageDict.breadcrumb_title} page={pageDict.breadcrumb_page} dictionary={dictionary} lang={lang} />
          <BlogArea dictionary={pageDict} lang={lang} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
