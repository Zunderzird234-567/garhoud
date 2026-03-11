
import menu_data from "@/data/menu-data";
import Link from "next/link";

interface NavmenuProps {
  menu_style?: boolean;
  dictionary: any;
  lang: string;
}

export default function Navmenu({ menu_style = false, dictionary, lang }: NavmenuProps) {
  const adjusted_menu_data = menu_data(lang);
  
  return (
    <ul>
      {adjusted_menu_data.map((item, i) => (
        <li key={i} className={`${item.has_submenu ? "menu-item-has-children" : ""}`}>
          {item.has_submenu ? (
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className={`${menu_style ? "light-color" : ""}`}
            >
              {dictionary.navigation[item.key]}
            </a>
          ) : (
            <Link href={item.path} className={`${menu_style ? "light-color" : ""}`}>
              {dictionary.navigation[item.key]}
            </Link>
          )}
          {item.has_submenu &&
            <ul className="sub-menu">
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
    </ul>
  )
}
