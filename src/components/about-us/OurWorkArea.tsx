

export default function OurWorkArea({ dictionary }: { dictionary: any }) {
  return (
      <div className="azzle-core-value-section">
        <div className="container">
          <div className="azzle-section-title title2 center max-w-650" data-aos="fade-up" data-aos-delay="500">
            <h2>{dictionary.work_area_title}</h2>
          </div>
          <div className="azzle-core-value-column">
            {dictionary.work_area_items.map((item: any, i: number) => (
              <div key={i} className="azzle-core-value-item" data-aos="fade-up" data-aos-delay={500 + i * 200}>
                <div className="azzle-core-value-header">
                  <div className="azzle-core-value-icon">
                    <img src={`/assets/images/about/icon${i + 1}.png`} alt="" />
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}
