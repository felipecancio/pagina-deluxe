import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Positioning } from "@/components/sections/ExclusiveOffer";
import { Gallery } from "@/components/sections/Gallery";
import { WhyDeluxe } from "@/components/sections/WhyDeluxe";
import { Benefits } from "@/components/sections/Benefits";
import { Comparison } from "@/components/sections/Comparison";
import { Guarantee } from "@/components/sections/Guarantee";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppSupport } from "@/components/WhatsAppSupport";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <TrustBar />
      <Problem />
      <Positioning />
      <Gallery />
      <WhyDeluxe />
      <Benefits />
      <Comparison />
      <Guarantee />
      <FinalCTA />
      <FAQ />
      <Footer />
      <WhatsAppSupport />
    </main>
  );
}
