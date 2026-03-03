
import Link from "next/link";



export default function ServiceArea() {
  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="azzle-section-title center max-width-780" data-aos="fade-up" data-aos-delay="500">
          <h2>A World of Services at Your Fingertips</h2>
        </div>
        <div className="azzle-iconbox-wrapper" data-aos="fade-up" data-aos-delay="700">
          <div className="azzle-iconbox-column">
            <div className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <img src="assets/images/service/DHA-logo.webp" alt="DHA" style={{ height: '150px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Dubai Health - DHA</h3>
                <p>Get your medical fitness typing and approvals seamlessly.</p>
              </div>
              <div className="azzle-iconbox-button mt-50">
                <Link href="/service">
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                 <img src="assets/images/service/typing-logo.webp" alt="Typing" style={{ height: '150px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Typing Services</h3>
                <p>Accurate typing for visa, labor, legal documents and much more.</p>
              </div>
              <div className="azzle-iconbox-button mt-50">
                <Link href="/service">
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <img src="assets/images/service/amer-logo.webp" alt="Amer" style={{ height: '150px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Amer</h3>
                <p>Complete Amer services under one roof. Visa renewal, cancellation & more.</p>
              </div>
              <div className="azzle-iconbox-button mt-50">
                <Link href="/service">
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <img src="assets/images/service/det-logo.webp" alt="DET" style={{ height: '150px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>DET</h3>
                <p>Business license applications, renewals & modifications.</p>
              </div>
              <div className="azzle-iconbox-button mt-50">
                <Link href="/service">
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
             <div className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                 <img src="assets/images/service/t3-logo.webp" alt="Taw-Jeeh" style={{ height: '150px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Taw-Jeeh Services</h3>
                <p>All Ministry of Labour services handled professionally.</p>
              </div>
              <div className="azzle-iconbox-button mt-50">
                <Link href="/service">
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
             <div className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <img src="assets/images/service/dubai-courts-logo.webp" alt="Notary Public" style={{ height: '150px' }} />
              </div>
              <div className="azzle-iconbox-content">
                <h3>Notary Public</h3>
                <p>Book legal appointments and get government certified copies at ease.</p>
              </div>
              <div className="azzle-iconbox-button mt-50">
                <Link href="/service">
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22" fill="none">
                    <path d="M15.5 2.25L24.25 11M24.25 11L15.5 19.75M24.25 11L1.75 11" stroke="#bd8c2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
