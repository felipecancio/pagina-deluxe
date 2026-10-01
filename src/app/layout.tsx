import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { headers } from "next/headers";
import { MetaPixel } from "@/components/MetaPixel";
import { PricingScroll } from "@/components/PricingScroll";
import { buildMetadata, getDictionary, type Locale } from "@/lib/i18n";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

async function requestLocale(): Promise<Locale> {
  const headerList = await headers();
  return headerList.get("x-locale") === "pt" ? "pt" : "es";
}

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(await requestLocale());
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await requestLocale();
  const t = getDictionary(locale);

  return (
    <html lang={t.htmlLang} className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <MetaPixel locale={locale} />
        <PricingScroll />
        {children}
      </body>
    </html>
  );
}
