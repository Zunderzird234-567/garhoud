
"use client";
import menu_data from '@/data/menu-data';
import Link from 'next/link'
import { useState } from 'react';

interface MobileMenuProps {
  setIsOpen?: Function;
  isOpen?: boolean;
  dictionary: any;
  lang: string;
}

export default function MobileMenu({ setIsOpen, isOpen, dictionary, lang }: MobileMenuProps) {
  const [navTitle, setNavTitle] = useState<string>("");
   const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  
  const adjusted_menu_data = menu_data(lang);

  return (
    <>
    
      <div className={`azzle-menu-wrapper ${isOpen ? "azzle-body-visible" : ""}`} onClick={() => setIsOpen && setIsOpen(false)}>
        <div className="azzle-menu-area text-center" onClick={(e) => e.stopPropagation()}>
          <div className="azzle-menu-mobile-top">
            <div className="mobile-logo">
              <Link href={`/${lang}`}>
                <img src="/assets/images/logo/logo-dark.svg" alt="logo" />
              </Link>
            </div>
            <button className="azzle-menu-toggle mobile" onClick={() => setIsOpen && setIsOpen(false)}>
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="azzle-mobile-menu">
            <ul>
              {adjusted_menu_data.map((item, i) => (
                <li key={i} className={`${item.title === navTitle ? 'azzle-active' : ''} ${item.has_submenu ? 'menu-item-has-children azzle-item-has-children' : ''}`}>
                  <Link href={item.path}>{dictionary.navigation[item.key]}{item.has_submenu && <span className="azzle-mean-expand" onClick={(e) => { e.preventDefault(); openMobileMenu(item.title as string);}}></span>}</Link>
                  {item.has_submenu &&
                    <ul className={`sub-menu azzle-submenu ${item.title === navTitle ? 'azzle-open' : ''}`} style={{ display: navTitle === item.title ? "block" : "none", }}>
                      {item.sub_menus?.map((sub_item, index) => {
                        const service = dictionary.service_tabs.find((s: any) => s.key === sub_item.key);
                        const title = service ? service.title : (sub_item as any).title;
                        return (
                          <li key={index}>
                            {sub_item.path.startsWith("http") ? (
                              <a href={sub_item.path} target="_blank" rel="noopener noreferrer" className="no-border">{title}</a>
                            ) : (
                              <Link className="no-border" href={sub_item.path}>{title}</Link>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  }
                </li>
              ))}
                <li><Link href={`/${lang}/contact-us`}>{dictionary.navigation.contact}</Link></li>
            </ul>
          </div>
          <div className="azzle-mobile-menu-btn">
            <Link className="azzle-default-btn sm-size" href={`/${lang}/contact-us`}>{dictionary.navigation.contact}</Link>
          </div>
        </div>
      </div>
    </>
  )
}
