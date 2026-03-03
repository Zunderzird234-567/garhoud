

export default function AboutArea({ dictionary }: { dictionary: any }) {
  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="azzle-section-title center max-width-850" data-aos="fade-up" data-aos-delay="500">
          <h2>{dictionary.area_title}</h2>
        </div>
        <div className="azzle-single-thumb" data-aos="fade-up" data-aos-delay="700">
          <img src="/assets/images/about/about-hero-image.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}
