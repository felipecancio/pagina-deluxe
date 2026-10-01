import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Positioning } from "@/components/sections/ExclusiveOffer";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyDeluxe } from "@/components/sections/WhyDeluxe";
import { Benefits } from "@/components/sections/Benefits";
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
      <Problem locale={locale} />
      <Positioning locale={locale} />
      <Gallery locale={locale} />
      <Testimonials locale={locale} />
      <WhyDeluxe locale={locale} />
      <Benefits locale={locale} />
      <Guarantee locale={locale} />
      <FinalCTA locale={locale} />
      <FAQ locale={locale} />
      <Footer locale={locale} />
      <WhatsAppSupport locale={locale} />
    </main>
  );
}
