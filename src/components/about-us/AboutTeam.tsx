import Link from "next/link";



export default function AboutTeam() {
  return (
    <section className="azzle-section-padding2">
      <div className="container">
        <div className="azzle-section-title two-column" data-aos="fade-right" data-aos-delay="500">
          <div className="row">
            <div className="col-lg-7">
              <h2>Our leadership consists of a group of talents</h2>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="section-title-button">
                <Link className="azzle-default-btn" data-aos="fade-right" data-aos-delay="900" href="/team" data-text="Meet Our Leadership">
                  <span className="button-wraper">Meet Our Leadership</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-team-wrap wrap2" data-aos="fade-up" data-aos-delay="500">
              
                <div className="azzle-team-thumb">
                  <img src="assets/images/team/team1.png" alt="Thumb" />
                </div>
                <div className="azzle-team-content">
                  <h3>Mr. Abraham Maslo</h3>
                </div>
              

              <div className="azzle-team-author-wrap">
                <div className="azzle-team-author-data">
                  <p>Chief AI Officer</p>
                </div>
                 
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-team-wrap wrap2" data-aos="fade-up" data-aos-delay="700">
              
                <div className="azzle-team-thumb">
                  <img src="assets/images/team/team2.png" alt="Thumb" />
                </div>
                <div className="azzle-team-content">
                  <h3>Willium Robert</h3>
                </div>
              

              <div className="azzle-team-author-wrap">
                <div className="azzle-team-author-data">
                  <p>Data Engineer</p>
                </div>
                 
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-team-wrap wrap2" data-aos="fade-up" data-aos-delay="900">
              
                <div className="azzle-team-thumb">
                  <img src="assets/images/team/team3.png" alt="Thumb" />
                </div>
                <div className="azzle-team-content">
                  <h3>Henry Fayol</h3>
                </div>
              
              <div className="azzle-team-author-wrap">
                <div className="azzle-team-author-data">
                  <p>Research Scientist</p>
                </div>
                 
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-team-wrap wrap2" data-aos="fade-up" data-aos-delay="500">
              
                <div className="azzle-team-thumb">
                  <img src="assets/images/team/team4.png" alt="Thumb" />
                </div>
                <div className="azzle-team-content">
                  <h3>Henry Martine</h3>
                </div>
              
              <div className="azzle-team-author-wrap">
                <div className="azzle-team-author-data">
                  <p>AI Researchers</p>
                </div>
                 
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-team-wrap wrap2" data-aos="fade-up" data-aos-delay="700">
              
                <div className="azzle-team-thumb">
                  <img src="assets/images/team/team5.png" alt="Thumb" />
                </div>
                <div className="azzle-team-content">
                  <h3>Jack Fox</h3>
                </div>
              
              <div className="azzle-team-author-wrap">
                <div className="azzle-team-author-data">
                  <p>NLP Expert</p>
                </div>
                 
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-team-wrap wrap2" data-aos="fade-up" data-aos-delay="900">
              
                <div className="azzle-team-thumb">
                  <img src="assets/images/team/team6.png" alt="Thumb" />
                </div>
                <div className="azzle-team-content">
                  <h3>Adam Smith</h3>
                </div>
              
              <div className="azzle-team-author-wrap">
                <div className="azzle-team-author-data">
                  <p>Project Manager</p>
                </div>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
