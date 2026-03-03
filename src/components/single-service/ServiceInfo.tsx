

export default function ServiceInfo({ dictionary }: { dictionary: any }) {
  return (
    <div className="azzle-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className="azzle-content-thumb" data-aos="zoom-in" data-aos-delay="500">
              <img src="/assets/images/home1/thumb1.png" alt="Thumb" />
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="azzle-default-content pr-110" data-aos="fade-up" data-aos-delay="700">
              <h2>{dictionary.title}</h2>
              <p className="mb-0">{dictionary.desc}</p>
              <div className="mt-50">
                <div className="azzle-service-box-column">
                  <div className="azzle-service-box">
                    <img src="/assets/images/service/clock.png" alt="Thumb" />
                    <h3>{dictionary.box1_title}</h3>
                    <p>{dictionary.box1_desc}</p>
                  </div>
                  <div className="azzle-service-box">
                    <img src="/assets/images/service/automation.png" alt="Thumb" />
                    <h3>{dictionary.box2_title}</h3>
                    <p>{dictionary.box2_desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
