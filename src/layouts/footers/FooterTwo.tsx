import Link from "next/link";

export default function FooterTwo() {
  return (
    <footer className="azzle-footer-section2 section overflow-hidden" style={{ backgroundImage: "url(/assets/images/home2/footer-bg.png)" }}>
      <div className="azzle-footer-top">
        <div className="azzle-cta-section2">
          <div className="container">
            <div className="azzle-section-title title2 font-title center max-width-780 pb-0" data-aos="fade-up" data-aos-delay="500">
              <h2>Let's get started and enjoy the power of AI</h2>
              <div className="azzle-subscribe-field2 mt-50">
                <input type="email" placeholder="Enter your email" />
                <button className="sub-btn2 azzle-default-btn btn4" type="submit" data-text="Get Started">
                  <span className="button-wraper">Get Started</span>
                  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.2139 1.5L17.7139 8M17.7139 8L11.2139 14.5M17.7139 8L0.999581 8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="azzle-footer-two">
          <div className="azzle-footer-menu2">
            <h4>Pages</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/team">Leadership</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/downloads">Downloads</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
          <div className="azzle-footer-menu2">
            <h4>Services</h4>
            <ul>
                <li><Link href="/service/dha">Dubai Health - DHA</Link></li>
                <li><Link href="/service/typing">Typing Services</Link></li>
                <li><Link href="/service/amer">Amer</Link></li>
                <li><a href="https://eservices.dubaided.gov.ae/pages/anon/gsthme.aspx?dedqs=PM671p6QBb0lV1okx2JABgxoLLKXOgPx" target="_blank" rel="noopener noreferrer">DET</a></li>
                <li><Link href="/service/tawjeeh">Taw-Jeeh Services</Link></li>
                <li><Link href="/service/notary">Notary Public</Link></li>
            </ul>
          </div>
          <div className="azzle-footer-menu2">
            <h4>More Links</h4>
            <ul>
              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/not-a-real-page">404 Not found</Link>
              </li>
            </ul>
          </div>
          <div className="azzle-footer-menu2">
            <h4>Socials</h4>
            <div className="azzle-social-wrap">
              <ul>
                <li>
                  <a className="wrap" href="https://www.facebook.com">
                    <img src="assets/images/home2/facebook.svg" alt="Icon" />
                  </a>
                  <a className="wrap2" href="https://www.facebook.com">Facebook</a>
                </li>
                <li>
                  <a className="wrap" href="https://www.twitter.com">
                    <img src="assets/images/home2/twitter.svg" alt="Icon" />
                  </a>
                  <a className="wrap2" href="https://www.twitter.com">Twitter</a>
                </li>
                <li>
                  <a className="wrap" href="https://www.instagram.com">
                    <img src="assets/images/home2/insta.svg" alt="Icon" />
                  </a>
                  <a className="wrap2" href="https://www.instagram.com">Instagram</a>
                </li>
                <li>
                  <a className="wrap" href="https://www.linkedin.com">
                    <img src="assets/images/home2/in.svg" alt="Icon" />
                  </a>
                  <a className="wrap2" href="https://www.bd.linkedin.com">Linkedin</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="azzle-footer-bottom-text-wrap">
          <div className="azzle-footer-bottom-logo">
            <Link href="/">
              <img src="assets/images/logo/logo-white.svg" alt="Logo" />
            </Link>
          </div>
          <div className="azzle-footer-bottom-text2">
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved by favdevs</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
