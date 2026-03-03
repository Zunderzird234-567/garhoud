
import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ServiceDetailsArea from "@/components/single-service/ServiceDetailsArea";
import VideoHomeOne from "@/components/homes/home-1/VideoHomeOne";
import ServiceInfo from "@/components/single-service/ServiceInfo";
import AboutCta from "@/components/about-us/AboutCta";
import { getDictionary } from "@/lib/get-dictionary";
import { i18n, Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function SingleServicePage({ params }: Props) {
  const { lang } = (await params) ?? { lang: i18n.defaultLocale };
  const dictionary = await getDictionary(lang);
  const pageDict = dictionary.single_service_page;
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title={pageDict.breadcrumb_title} page={pageDict.breadcrumb_page} dictionary={dictionary} lang={lang} />
          <ServiceDetailsArea dictionary={pageDict} />
          <VideoHomeOne dictionary={pageDict.video_area} />
          <ServiceInfo dictionary={pageDict.info_area} />
          <AboutCta dictionary={dictionary.about_cta} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
