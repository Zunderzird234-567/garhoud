import ErrorPage from "@/components/error";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

// This component is automatically rendered by Next.js for 404 errors
// within the /[lang] segment. It correctly receives the `lang` param.
export default async function NotFound({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return <ErrorPage dictionary={dictionary} lang={lang} />;
}
