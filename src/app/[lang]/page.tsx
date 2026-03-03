import HomeOne from "@/components/homes/home-1";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function IndexPage({ params }: Props) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return <HomeOne dictionary={dictionary} lang={lang} />;
}
