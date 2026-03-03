

export default function AboutHomeOne({ dictionary }: { dictionary: any }) {
  return (
    <>
      <div className="azzle-section-padding-bottom overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 order-lg-2 azzle-about-thumb-container">
              <div className="azzle-content-thumb" data-aos="zoom-in" data-aos-delay="500">
                <img src="/assets/images/home1/thumb1.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-lg-7 d-flex align-items-center">
              <div className="azzle-default-content pr-110" data-aos="fade-up" data-aos-delay="700">
                <h2>{dictionary.title}</h2>
                <p className="mb-0">{dictionary.desc}</p>
                <div className="azzle-listicon-wrap mt-50">
                  <ul>
                    {dictionary.features.map((feature: string, i: number) => (
                      <li key={i}>
                        <img src="/assets/images/home1/arrow.svg" alt="Icon" />
                        <h3>{feature}</h3>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
