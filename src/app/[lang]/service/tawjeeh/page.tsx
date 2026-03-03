
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TawjeehArea from "@/components/service/tawjeeh/TawjeehArea";
import ServicePageHeader from "@/components/service/ServicePageHeader";
import OtherServicesCarousel from "@/components/service/OtherServicesCarousel";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function TawjeehPage({ params }: Props) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: "120px" }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/t3-logo.webp"
            logoAlt="Taw-Jeeh"
            title={dictionary.tawjeeh_page.header_title}
            subtitle={dictionary.tawjeeh_page.header_subtitle}
          />
          <TawjeehArea dictionary={dictionary.tawjeeh_page} />
          <OtherServicesCarousel dictionary={dictionary} lang={lang} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  );
}
