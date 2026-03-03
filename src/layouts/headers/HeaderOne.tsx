
"use client";
import Link from "next/link";
import Navmenu from "./Navmenu";
import UseSticky from "@/hooks/UseSticky";
import { useState } from "react";
import MobileMenu from "./MobileMenu"; 
import LanguageSwitcher from "@/components/language-switcher";

export default function HeaderOne({ dictionary, lang }: { dictionary: any, lang: string }) {
  const { sticky, hidden } = UseSticky();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={`site-header azzle-header-section ${sticky ? "sticky-menu" : ""} ${hidden ? "hide-header" : ""}`} id="sticky-menu">
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-logo">
                <Link href={`/${lang}`}>
                  <img src="/assets/images/logo-1-dark.svg" alt="logo" style={{ width: '250px' }} />   
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="azzle-main-menu-item">
                <nav className="main-menu menu-style1 custom-breakpoint menu-left">
                  <Navmenu dictionary={dictionary} lang={lang} />                   
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className="azzle-header-button-wraper">
                <div className="azzle-header-login-button">
                  <ul>
                    <li>
                      <a href="tel:043991744">{dictionary.header_phone}</a>
                    </li>
                  </ul>
                </div>
                <Link className="azzle-default-btn azzle-header-btn" href={`/${lang}/contact-us`} data-text={dictionary.navigation.contact}>
                  <span className="button-wraper">{dictionary.navigation.contact}</span>
                </Link>
                <LanguageSwitcher />
              </div>
              <div className="azzle-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  {/* <!-- mobile menu trigger --> */}
                  <button onClick={() => setIsOpen(!isOpen)} className="azzle-menu-toggle custom-breakpoint">
                    <span></span>
                  </button>
                  {/* <!--/.Mobile Menu Hamburger Ends--> */}
                </nav>
              </div>
            </div>
          </div>
        </div>

      </header>
      <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} dictionary={dictionary} lang={lang} />
    </>
  )
}
