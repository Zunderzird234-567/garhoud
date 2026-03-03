import { redirect } from 'next/navigation';
import type { Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function MilestonesPage({ params }: Props) {
  const { lang } = (await params) ?? { lang: i18n.defaultLocale };
  redirect(`/${lang}`);
  return null;
}
