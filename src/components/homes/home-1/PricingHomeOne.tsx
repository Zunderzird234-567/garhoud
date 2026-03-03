"use client";

export default function PricingHomeOne({ dictionary }: { dictionary: any }) {
  return (
    <section className="azzle-section-padding-bottom">
      <div className="position-r pt-0">
        <div className="container">
          <div className="card-grid-container">
            {/* Vision */}
            <div className="card-grid-item" data-aos="fade-up" data-aos-delay="500">
              <div className="azzle-pricing-wrap">
                <div className="azzle-pricing-header">
                  <h4>{dictionary.vision.title}</h4>
                </div>
                <div className="azzle-pricing-body">
                  <p>
                    {dictionary.vision.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="card-grid-item" data-aos="fade-up" data-aos-delay="700">
              <div className="azzle-pricing-wrap active">
                <div className="azzle-pricing-header">
                  <h4>{dictionary.mission.title}</h4>
                </div>
                <div className="azzle-pricing-body">
                  <p>
                   {dictionary.mission.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="card-grid-item" data-aos="fade-up" data-aos-delay="900">
              <div className="azzle-pricing-wrap">
                <div className="azzle-pricing-header">
                  <h4>{dictionary.values.title}</h4>
                </div>
                <div className="azzle-pricing-body">
                  {dictionary.values.items.map((item: string, i: number) => (
                     <h5 key={i} style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: i === dictionary.values.items.length - 1 ? '0' : '1rem' }}>{item}</h5>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
