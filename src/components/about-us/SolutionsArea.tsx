
import Link from "next/link";

export default function SolutionsArea({ dictionary }: { dictionary: any }) {
  return (
    <div className="azzle-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className="azzle-content-thumb" data-aos="zoom-in" data-aos-delay="500">
              <img src="/assets/images/about/about-image.png" alt="Thumb" />
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="azzle-default-content pr50" data-aos="fade-up" data-aos-delay="700">
              <h2>{dictionary.solutions_area.title}</h2>
              <p>{dictionary.solutions_area.desc1}</p>
              <p className="mb-0">{dictionary.solutions_area.desc2}</p>
              <div className="mt-50">
                <Link className="azzle-default-btn aos-init aos-animate" data-aos="fade-up" data-aos-delay="700" href="/contact-us" data-text={dictionary.solutions_area.cta}>
                  <span className="button-wraper">{dictionary.solutions_area.cta}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
