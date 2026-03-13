
import Link from "next/link";

export default function TestimonialHomeOne({ dictionary }: { dictionary: any }) {
  const testimonials = dictionary.feedbacks.slice(0, 6);
  const rating = dictionary.rating ?? "4.8";

  const renderStars = (value: number) =>
    Array.from({ length: 5 }, (_, index) => (
      <span key={index}>{index < value ? "★" : "☆"}</span>
    ));

  const getInitials = (name: string) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part: string) => part[0]?.toUpperCase())
      .join("");

  return (
    <div className="azzle-section-padding3 bg-heading">
      <div className="container">
        <div className="azzle-section-title title2 center" data-aos="fade-up" data-aos-delay="500">
          <div className="google-review-badge">
            <div className="google-review-badge__main">
              <div className="google-review-badge__brand">
                <img
                  src="/assets/images/home1/google-logo.webp"
                  alt="Google"
                  className="google-review-badge__logo"
                />
                <span className="google-review-badge__label">{dictionary.title}</span>
              </div>

              <div className="google-review-badge__meta">
                <span className="google-review-badge__rating">{rating}</span>
                <div className="google-review-badge__stars" aria-label={`${rating} star rating`}>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>

            <Link
              href={dictionary.review_link}
              target="_blank"
              rel="noopener noreferrer"
              className="google-review-badge__cta"
            >
              {dictionary.write_review}
            </Link>
          </div>
          <p className="google-review-badge__subtext">{dictionary.summary}</p>
        </div>
        <div className="row">
          {testimonials.map((testimonial: any, i: number) => (
            <div key={i} className="col-xl-6 col-lg-6 col-md-6 google-review-col">
              <div className="google-review-card" data-aos="fade-up" data-aos-delay={200 + (i % 3 * 200)}>
                <div className="google-review-card__header">
                  <div className="google-review-card__avatar">{getInitials(testimonial.name)}</div>
                  <div className="google-review-card__person">
                    <p>{testimonial.name}</p>
                    <span>{dictionary.source_label}</span>
                  </div>
                </div>

                <div className="google-review-card__rating">
                  <span className="google-review-card__score">5.0</span>
                  <div className="google-review-card__stars" aria-label="5 star review">
                    {renderStars(5)}
                  </div>
                  <span className="google-review-card__verified">
                    <img src="/assets/images/home1/verification.webp" alt="Verified" />
                    {dictionary.verified_label}
                  </span>
                </div>

                <div className="google-review-card__content">
                  <p>{testimonial.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
