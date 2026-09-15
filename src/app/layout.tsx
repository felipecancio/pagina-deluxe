import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { MetaPixel } from "@/components/MetaPixel";
import { PricingScroll } from "@/components/PricingScroll";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://mp-deluxe.vercel.app"),
  title: "Mega Pack Deluxe — Criativarts",
  description:
    "La colección más exclusiva de Criativarts. Más de 200 diseños premium con alto valor percibido, uso comercial y actualizaciones de por vida para elevar tus productos.",
  keywords: [
    "Mega Pack Deluxe",
    "Criativarts",
    "diseños premium",
    "diseños exclusivos",
    "alta resolución",
    "uso comercial",
    "DTF",
    "sublimación",
  ],
  openGraph: {
    title: "Mega Pack Deluxe — Criativarts",
    description:
      "Diseños exclusivos de alto valor percibido para cuadros, playeras, DTF y productos premium.",
    url: "/",
    siteName: "Mega Pack Deluxe",
    type: "website",
    locale: "es_LA",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Mega Pack Deluxe — Colección Premium Criativarts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega Pack Deluxe — Criativarts",
    description:
      "Diseños exclusivos de alto valor percibido para cuadros, playeras, DTF y productos premium.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <MetaPixel />
        <PricingScroll />
        {children}
      </body>
    </html>
  );
}
