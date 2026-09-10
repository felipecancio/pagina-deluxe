import Image from "next/image";
import { CheckoutCTA } from "../CheckoutCTA";
import { ArtCarousel } from "../ArtCarousel";
import { HeroArtGrid } from "../HeroArtGrid";
import { GALLERY_IMAGES, GALLERY_IMAGES_ROW2 } from "@/lib/constants";

const CAROUSEL_ROW1 = GALLERY_IMAGES.slice(0, 10);
const CAROUSEL_ROW2 = GALLERY_IMAGES_ROW2.slice(0, 10);

function HeroMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="animate-float">
        <Image
          src="/images/mockup-hero.webp"
          alt="Mega Pack Deluxe — Colección Premium Criativarts"
          width={720}
          height={550}
          priority
          fetchPriority="high"
          quality={80}
          sizes="(min-width: 1280px) 680px, (min-width: 1024px) 580px, 420px"
          className="h-auto w-full max-w-[400px] object-contain sm:max-w-[420px] lg:max-w-[580px] xl:max-w-[680px]"
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-graphite/30 via-luxury-black to-luxury-black" />
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-luxury-gold/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-luxury-gold/3 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-12 lg:pb-16 lg:pt-20">
        <div className="grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex w-full flex-col items-center text-center lg:col-start-1 lg:row-start-1 lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-luxury-gold/30 bg-luxury-gold/5 px-4 py-2">
              <svg
                className="h-3.5 w-3.5 shrink-0 text-luxury-gold"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 2L2 9l10 13L22 9 12 2z" />
              </svg>
              <span className="text-xs font-medium tracking-wide text-luxury-gold/70">
                Colección Premium{" "}
                <span className="gold-gradient-text font-semibold">Criativarts</span>
              </span>
            </div>

            <h1 className="font-display text-5xl font-light leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Mega Pack{" "}
              <span className="gold-gradient-text font-medium italic">Deluxe</span>
            </h1>

            <p className="mt-4 font-display text-xl font-light italic text-luxury-silver md:text-2xl">
              Diseños exclusivos de alto valor percibido para productos que se venden como lujo.
            </p>

            <div className="gold-line my-8 w-24 lg:mx-0" />
          </div>

          <HeroMockup className="mb-8 w-full lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mb-0" />

          <div className="flex w-full flex-col items-center text-center lg:col-start-1 lg:row-start-2 lg:items-start lg:text-left">
            <p className="max-w-lg text-sm font-light leading-relaxed text-white/70 md:text-base lg:text-lg">
              No es un pack más. Es una curaduría premium de arte sofisticado,
              lista para cuadros, playeras, DTF, sublimación y regalos que merecen
              un precio más alto. Acceso inmediato. Uso comercial incluido.
            </p>

            <div className="relative -mx-6 my-8 w-[calc(100%+3rem)] space-y-4 lg:hidden">
              <ArtCarousel images={CAROUSEL_ROW1} direction="left" />
              <ArtCarousel
                images={CAROUSEL_ROW2}
                direction="right"
                imageBasePath="/images/row2"
              />
            </div>
          </div>
        </div>

        <HeroArtGrid />

        <div className="mt-10 flex flex-col items-center">
          <CheckoutCTA size="large" />
        </div>
      </div>
    </section>
  );
}
