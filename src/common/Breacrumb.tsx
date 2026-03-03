import Link from "next/link";
import type { Locale } from "@/i18n-config";

interface BreacrumbProps {
  title?: string;
  page?: string;
  dictionary: any;
  lang: Locale;
}

export default function Breacrumb({ title, page, dictionary, lang }: BreacrumbProps) {
  return (
    <div className="azzle-breadcrumb" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="azzle-breadcrumb-content">
          <h1 className="azzle-breadcrumb-title" data-aos="fade-up" data-aos-delay="500">{title}</h1>
          <div className="azzle-breadcrumb-wrapper" data-aos="fade-up" data-aos-delay="700">
            <div className="azzle-breadcrumb-wrap">
              <div className="azzle-breadcrumb-menu">
                <ul>
                  <li><Link href={`/${lang}`}>{dictionary.breadcrumb_home}</Link></li>
                  <li><img src="/assets/images/about/arrow-right.png" alt="" /></li>
                  <li aria-current="page">{page}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
