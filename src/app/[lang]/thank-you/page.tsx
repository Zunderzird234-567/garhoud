import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import { getDictionary } from "@/lib/get-dictionary";
import { i18n, Locale } from "@/i18n-config";
import Link from "next/link";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function ThankYouPage({ params }: Props) {
  const { lang } = (await params) ?? { lang: i18n.defaultLocale };
  const dictionary = await getDictionary(lang);
  const content = dictionary.thank_you_page;

  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: "120px" }}>
          <div className="azzle-section-padding">
            <div className="container">
              <div className="azzle-default-content text-center">
                <h2 data-aos="fade-up" data-aos-delay="500">{content.title}</h2>
                <p data-aos="fade-up" data-aos-delay="700">{content.desc}</p>
                <div className="mt-50">
                  <Link
                    className="azzle-default-btn"
                    data-aos="fade-up"
                    data-aos-delay="900"
                    href={`/${lang}`}
                    data-text={content.button}
                  >
                    <span className="button-wraper">{content.button}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  );
}
