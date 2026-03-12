
const menu_data = (lang: string) => [
  { title: "About Us", key: 'about', path: `/${lang}/about-us`, has_submenu: false },
  { 
    title: "Services", 
    key: 'services',
    path: `/${lang}/service`,
    has_submenu: true, 
    sub_menus: [
      { key: "dha", path: `/${lang}/service/dha` },
      { key: "typing", path: `/${lang}/service/typing` },
      { key: "amer", path: `/${lang}/service/amer` },
      { key: "det", path: "https://eservices.dubaided.gov.ae/pages/anon/gsthme.aspx?dedqs=PM671p6QBb0lV1okx2JABgxoLLKXOgPx" },
      { key: "tawjeeh", path: `/${lang}/service/tawjeeh` },
      { key: "notary", path: `/${lang}/service/notary` },
      { key: "salem", path: `/${lang}/service/salem` },
      { key: "golden-visa", path: `/${lang}/service/golden-visa` },
      { key: "business-setup", path: `/${lang}/service/business-setup` },
      { key: "tax-consultancy", path: `/${lang}/service/tax-consultancy` },
      { key: "accounting", path: `/${lang}/service/accounting` },
    ]
  },
  { title: "Leadership", key: 'leadership', has_submenu: false, path: `/${lang}/team` },
  { title: "Gallery", key: 'gallery', has_submenu: false, path: `/${lang}/gallery` },
  { title: "Downloads", key: 'downloads', has_submenu: false, path: `/${lang}/downloads` },
];


export default menu_data;
