
import ResetPassword from "@/components/reset-password";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function ResetPasswordPage({ params }: Props) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <ResetPassword dictionary={dictionary} lang={lang} />
  )
}
