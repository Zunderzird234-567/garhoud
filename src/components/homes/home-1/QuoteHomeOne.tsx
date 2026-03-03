
export default function QuoteHomeOne({ dictionary }: { dictionary: any }) {
  return (
    <div className="azzle-section-padding overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="azzle-content-thumb" data-aos="fade-right" data-aos-delay="500">
              <img src="/assets/images/home1/thumb2.png" alt="Thumb" style={{ transform: 'scaleX(-1)' }} />
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="azzle-default-content pl-110" data-aos="fade-left" data-aos-delay="700">
              <blockquote className="blockquote">
                <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>{dictionary.text}</p>
                <footer className="blockquote-footer mt-3">{dictionary.author}</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
