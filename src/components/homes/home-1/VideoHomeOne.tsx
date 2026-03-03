import ModalVideo from "@/modal/modalVideo";


export default function VideoHomeOne({ dictionary }: { dictionary: any }) {
  return (
    <section className="azzle-video-section azzle-section-padding-bottom">
      <div className="row">
        <div className="col-xl-6">
          <div className="azzle-video-thumb">
            <img src="/assets/images/home1/thumb3.png" alt="Thumb" />
            <ModalVideo>
              <a className="azzle-popup-video video-init" href="https://www.youtube.com/watch?v=zE_WFiHnSlY">
                <img src="/assets/images/home1/play-btn.png" alt="" />
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </a>

            </ModalVideo>
          </div>
        </div>
        <div className="col-xl-6 d-flex align-items-center">
          <div className="azzle-video-wrap" data-aos="fade-up" data-aos-delay="500">
            <div className="azzle-video-content">
              <h2>{dictionary.title}</h2>
              <p>{dictionary.desc}</p>
              <div className="divider2"></div>
              <div className="azzle-counter-wrap">
                <div className="azzle-counter-item">
                  <h2 className="azzle-counter-data" aria-label={dictionary.counter1_val}>{dictionary.counter1_val}</h2>
                  <p>{dictionary.counter1_label}</p>
                </div>
                <div className="azzle-counter-item">
                  <h2 className="azzle-counter-data" aria-label={dictionary.counter2_val}>{dictionary.counter2_val}</h2>
                  <p>{dictionary.counter2_label}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
