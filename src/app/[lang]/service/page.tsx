
import { Suspense } from "react";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import FaqHomeOne from "@/components/homes/home-1/FaqHomeOne";
import ServiceTabs from "@/components/service/ServiceTabs";
import AboutCta from "@/components/about-us/AboutCta";
import { getDictionary } from "@/lib/get-dictionary";
import { i18n, Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function ServicePage({ params }: Props) {
  const { lang } = (await params) ?? { lang: i18n.defaultLocale };
  const dictionary = await getDictionary(lang);
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <section className="azzle-section-padding pb-0">
            <div className="container">
              <div className="azzle-section-title center max-width-780" data-aos="fade-up" data-aos-delay="500">
                <h2>{dictionary.service_page.title}</h2>
              </div>
            </div>
          </section>
          <Suspense fallback={<div>Loading...</div>}>
            <ServiceTabs dictionary={dictionary.service_tabs} />
          </Suspense>
          <FaqHomeOne dictionary={dictionary.faq} lang={lang} />
          <AboutCta dictionary={dictionary.about_cta} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
