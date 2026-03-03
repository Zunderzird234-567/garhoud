

export default function ServiceDetailsArea({ dictionary }: { dictionary: any }) {
  const detailsDict = dictionary.details_area;
  const industryDict = dictionary.industry_use;
  return (
    <>
      <div className="azzle-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 offset-xl-1 offset-lg-0 order-lg-2">
              <div className="azzle-content-thumb" data-aos="fade-left" data-aos-delay="500">
                <img src="/assets/images/home1/thumb2.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 d-flex align-items-center">
              <div className="azzle-default-content" data-aos="fade-up" data-aos-delay="700">
                <h2>{detailsDict.title}</h2>
                <p>{detailsDict.desc}</p>
                <div className="mt-50">
                  <div className="azzle-service-box-column">
                    <div className="azzle-service-box">
                      <img src="/assets/images/service/data.png" alt="Thumb" />
                      <h3>{detailsDict.box1_title}</h3>
                      <p>{detailsDict.box1_desc}</p>
                    </div>
                    <div className="azzle-service-box">
                      <img src="/assets/images/service/setting.png" alt="Thumb" />
                      <h3>{detailsDict.box2_title}</h3>
                      <p>{detailsDict.box2_desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end content --> */}

      <div className="azzle-section-pb">
        <div className="container">
          <div className="azzle-section-title center max-width-850" data-aos="fade-up" data-aos-delay="500">
            <h2>{industryDict.title}</h2>
          </div>
          <div className="row">
            <div className=" col-lg-5">
              <div className="azzle-content-thumb" data-aos="fade-right" data-aos-delay="500">
                <img src="/assets/images/service/target.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 d-flex align-items-center">
              <div className="azzle-target-list-wrap">
                <div className="azzle-target-list" data-aos="fade-up" data-aos-delay="500">
                  <h3>{industryDict.item1_title}</h3>
                  <p>{industryDict.item1_desc}</p>
                </div>
                <div className="azzle-target-list" data-aos="fade-up" data-aos-delay="700">
                  <h3>{industryDict.item2_title}</h3>
                  <p>{industryDict.item2_desc}</p>
                </div>
                <div className="azzle-target-list" data-aos="fade-up" data-aos-delay="900">
                  <h3>{industryDict.item3_title}</h3>
                  <p>{industryDict.item3_desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
