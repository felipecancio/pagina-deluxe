import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Gallery } from "@/components/sections/Gallery";
import { Themes } from "@/components/sections/Themes";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyDeluxe } from "@/components/sections/WhyDeluxe";
import { Guarantee } from "@/components/sections/Guarantee";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppSupport } from "@/components/WhatsAppSupport";
import type { Locale } from "@/lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <main className="overflow-x-hidden">
      <Header locale={locale} />
      <Hero locale={locale} />
      <TrustBar locale={locale} />
      <Gallery locale={locale} />
      <Themes locale={locale} />
      <Testimonials locale={locale} />
      <WhyDeluxe locale={locale} />
      <Guarantee locale={locale} />
      <FinalCTA locale={locale} />
      <FAQ locale={locale} />
      <Footer locale={locale} />
      <WhatsAppSupport locale={locale} />
    </main>
  );
}
