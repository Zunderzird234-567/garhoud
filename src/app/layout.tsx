import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Garhoud Center - Your Trusted Partner for Government Services in Dubai",
  description: "Al Garhoud Center offers a comprehensive range of government services in Dubai, including visa processing, Emirates ID typing, medical fitness applications, and approvals from Amer, DET, and DHA. Your one-stop solution for efficient and professional document processing.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // This root layout is required by Next.js.
    // The `lang` attribute is set to a default 'en' here.
    // The direction `dir` will be applied by a wrapper in the nested [lang]/layout.tsx.
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
