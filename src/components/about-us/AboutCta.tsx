

export default function AboutCta({ dictionary }: { dictionary: any }) {
  return (
    <div className="azzle-content-section overflow-hidden">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-5">
            <div className="azzle-content-thumb" data-aos="fade-right" data-aos-delay="500">
              <img src="/assets/images/about/image-3.png" alt="Thumb" />
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="azzle-default-content w-100 light-color pl-30" data-aos="fade-up" data-aos-delay="700">
              <h2>{dictionary.title}</h2>
              <p>{dictionary.desc}</p>

              <div className="mt-50">
                <div className="azzle-contact-info">
                  <ul>
                    <li>{dictionary.website_label}<a href="">www.algarhoudcenter.ae</a></li>
                    <li>{dictionary.email_label}<a href="">info@algarhoudamercenter.ae</a></li>
                    <li>{dictionary.phone_label}<a href="tel:043991744">04 399 1744</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
