
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import AccountingArea from "@/components/service/accounting/AccountingArea";
import ServicePageHeader from "@/components/service/ServicePageHeader";
import OtherServicesCarousel from "@/components/service/OtherServicesCarousel";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function AccountingPage({ params }: Props) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/accounting.jpg"
            logoAlt="Accounting Services"
            title={dictionary.accounting_page.header_title}
            subtitle={dictionary.accounting_page.header_subtitle}
          />
          <AccountingArea dictionary={dictionary.accounting_page} />
          <OtherServicesCarousel dictionary={dictionary} lang={lang} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
