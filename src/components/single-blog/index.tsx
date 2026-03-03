import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import BlogDetailisArea from "./BlogDetailisArea";
import type { Locale } from "@/i18n-config";

export default function SingleBlog({ dictionary, lang }: { dictionary: any, lang: Locale }) {
  const pageDict = dictionary.single_blog_page;
  // Re-use sidebar translations from the main blog page for consistency
  const sidebarDict = dictionary.blog_page.sidebar;

  return (
     <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title={pageDict.breadcrumb_title} page={pageDict.breadcrumb_page} dictionary={dictionary} lang={lang} />
          <BlogDetailisArea dictionary={pageDict} sidebar={sidebarDict} lang={lang} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
