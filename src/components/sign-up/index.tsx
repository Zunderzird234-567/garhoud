import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";

export default function Signup({ dictionary, lang }: { dictionary: any, lang: string }) {
  const pageDict = dictionary.sign_up_page;
  return (
    <Wrapper>
      <div className="azzle-extra-header">
        <div className="container">
          <div className="azzle-extra-logo">
            <Link href={`/${lang}`}>
              <img src="/assets/images/logo/logo-dark.svg" alt="logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="azzle-account-section">
        <div className="container">
          <div className="azzle-account-header">
            <h1>{pageDict.title}</h1>
          </div>
          <div className="azzle-account-box">
            <form action="#">
              <div className="azzle-contact-field mb24">
                <label>{pageDict.name_label}</label>
                <input type="text" placeholder={pageDict.name_placeholder} />
              </div>
              <div className="azzle-contact-field mb24">
                <label>{pageDict.email_label}</label>
                <input type="email" placeholder={pageDict.email_placeholder} />
              </div>
              <div className="azzle-contact-field mb24">
                <label>{pageDict.password_label}</label>
                <input type="password" placeholder={pageDict.password_placeholder} />
              </div>
              <button id="azzle-main-submit-btn" className="w-100" type="button">{pageDict.button}</button>
              <div className="azzle-account-or">
                <p>{pageDict.or}</p>
              </div>
            </form>
            <div className="azzle-account-social-wrap">
              <a className="azzle-account-social" href="https://www.google.com/">
                <img src="/assets/images/contact/google.png" alt="google" />
                {pageDict.google_button}
              </a>
              <a className="azzle-account-social" href="https://www.facebook.com/">
                <img src="/assets/images/contact/facebook.png" alt="facebook" />
                {pageDict.facebook_button}
              </a>
            </div>
            <div className="azzle-accout-footer">
              <p>{pageDict.has_account_text} <Link href={`/${lang}/sign-in`}>{pageDict.has_account_link}</Link></p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
