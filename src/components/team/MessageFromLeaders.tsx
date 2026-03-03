
import Image from "next/image";

export default function MessageFromLeaders({ dictionary }: { dictionary: any }) {
  return (
    <section className="azzle-section-padding leadership-message-section">
      <div className="container">
        <div className="row align-items-stretch">
          
          {/* CEO Message */}
          <div className="col-lg-6 d-flex" data-aos="fade-right">
            <div className="leadership-message-card">
              <h2 className="message-title">{dictionary.ceo_message_title}</h2>
              <div className="message-content">
                {dictionary.ceo_message.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="message-author-footer">
                <Image src="/assets/images/home1/yasser.jpeg" alt={dictionary.ceo_name} width={150} height={150} className="author-image" />
                <div className="author-details">
                  <h4>{dictionary.ceo_name}</h4>
                  <p>{dictionary.ceo_role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* GM Message */}
          <div className="col-lg-6 d-flex" data-aos="fade-left">
            <div className="leadership-message-card">
              <h2 className="message-title">{dictionary.gm_message_title}</h2>
              <div className="message-content">
                 {dictionary.gm_message.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="message-author-footer">
                 <Image src="/assets/images/home1/sameer.jpeg" alt={dictionary.gm_name} width={150} height={150} className="author-image" />
                <div className="author-details">
                  <h4>{dictionary.gm_name}</h4>
                  <p>{dictionary.gm_role}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
