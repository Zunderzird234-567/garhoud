

export default function TestimonialHomeOne({ dictionary }: { dictionary: any }) {
  const testimonials = dictionary.feedbacks.slice(0, 6); // Ensure only 6 testimonials are shown

  return (
    <div className="azzle-section-padding3 bg-heading">
      <div className="container">
        <div className="azzle-section-title title2 center" data-aos="fade-up" data-aos-delay="500">
          <h2>{dictionary.title}</h2>
        </div>
        <div className="row">
          {testimonials.map((testimonial: any, i: number) => (
             <div key={i} className="col-xl-4 col-lg-6 col-md-6">
              <div className="azzle-iconbox-wrap2" data-aos="fade-up" data-aos-delay={200 + (i % 3 * 200)}>
                <div className="azzle-iconbox-rating">
                  <img src="/assets/images/home1/start.svg" alt="rating" />
                </div>
                <div className="azzle-iconbox-content2">
                  <p>{testimonial.text}</p>
                </div>
                <div className="azzle-iconbox-author-wrap">
                  <div className="azzle-iconbox-author-thumb">
                    <img src={testimonial.img} alt="thumb" />
                  </div>
                  <div className="azzle-iconbox-author-data">
                    <p>{testimonial.author}</p>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
