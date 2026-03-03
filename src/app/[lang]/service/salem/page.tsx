
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import SalemArea from "@/components/service/salem/SalemArea";
import ServicePageHeader from "@/components/service/ServicePageHeader";
import OtherServicesCarousel from "@/components/service/OtherServicesCarousel";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function SalemPage({ params }: Props) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/salem.jpg"
            logoAlt="Salem"
            title={dictionary.salem_page.header_title}
            subtitle={dictionary.salem_page.header_subtitle}
          />
          <SalemArea dictionary={dictionary.salem_page} />
          <OtherServicesCarousel dictionary={dictionary} lang={lang} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
