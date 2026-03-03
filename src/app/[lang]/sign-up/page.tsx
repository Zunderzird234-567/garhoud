
import Signup from "@/components/sign-up";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function SignUpPage({ params }: Props) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <Signup dictionary={dictionary} lang={lang} />
  )
}
