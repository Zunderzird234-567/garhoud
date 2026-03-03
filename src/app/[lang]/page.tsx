import HomeOne from "@/components/homes/home-1";
import { getDictionary } from "@/lib/get-dictionary";
import { i18n, Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function IndexPage({ params }: Props) {
  const { lang } = (await params) ?? { lang: i18n.defaultLocale };
  const dictionary = await getDictionary(lang);
  return <HomeOne dictionary={dictionary} lang={lang} />;
}
