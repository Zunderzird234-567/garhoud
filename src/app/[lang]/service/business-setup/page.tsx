
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ServicePageHeader from "@/components/service/ServicePageHeader";
import OtherServicesCarousel from "@/components/service/OtherServicesCarousel";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";
import BusinessSetupArea from "@/components/service/business-setup/BusinessSetupArea";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function BusinessSetupPage({ params }: Props) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/business.jpg"
            logoAlt="Business Setup"
            title={dictionary.business_setup_page.header_title}
            subtitle={dictionary.business_setup_page.header_subtitle}
          />
          <BusinessSetupArea dictionary={dictionary.business_setup_page} />
          <OtherServicesCarousel dictionary={dictionary} lang={lang} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
