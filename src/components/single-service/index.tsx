import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ServiceDetailsArea from "./ServiceDetailsArea";
import VideoHomeOne from "../homes/home-1/VideoHomeOne";
import ServiceInfo from "./ServiceInfo";
import AboutCta from "../about-us/AboutCta";


export default function SingleService({ dictionary, lang }: { dictionary: any; lang: string }) {
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
