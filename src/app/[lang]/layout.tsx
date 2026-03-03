import { i18n, Locale } from "@/i18n-config";
import { ReactNode } from "react";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  // This layout is nested within src/app/layout.tsx.
  // It wraps the content in a div with the correct language direction.
  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      {children}
    </div>
  );
}
