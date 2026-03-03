import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";

export default function ResetPassword({ dictionary, lang }: { dictionary: any, lang: string }) {
  const pageDict = dictionary.reset_password_page;
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
                <label>{pageDict.email_label}</label>
                <input type="email" placeholder={pageDict.email_placeholder} />
              </div>
              <button id="azzle-main-submit-btn" className="w-100" type="button">{pageDict.button}</button>
            </form>
            <div className="azzle-accout-footer">
              <p>{pageDict.back_to_login_text} <Link href={`/${lang}/sign-in`}>{pageDict.back_to_login_link}</Link></p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
