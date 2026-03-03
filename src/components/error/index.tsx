import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";


export default function ErrorPage({ dictionary, lang }: { dictionary: any, lang: string }) {
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="azzle-404-section">
            <div className="container">
              <div className="azzle-404-content">
                <img data-aos="fade-up" data-aos-delay="500" src="/assets/images/blog/error404.png" alt="404" />
                <h2 data-aos="fade-up" data-aos-delay="700">{dictionary.error_page.title}</h2>
                <div className="mt-50">
                  <Link className="azzle-default-btn" data-aos="fade-up" data-aos-delay="900" href={`/${lang}`} data-text={dictionary.error_page.button}>
                    <span className="button-wraper">{dictionary.error_page.button}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
      </div>
    </Wrapper>
  )
}
