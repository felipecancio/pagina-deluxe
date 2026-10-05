import { CheckoutCTA } from "../CheckoutCTA";
import { ArtCarousel } from "../ArtCarousel";
import { HeroArtGrid } from "../HeroArtGrid";
import { GALLERY_IMAGES, GALLERY_IMAGES_ROW2 } from "@/lib/constants";
import { getDictionary, type Locale } from "@/lib/i18n";

const CAROUSEL_ROW1 = GALLERY_IMAGES.slice(0, 10);
const CAROUSEL_ROW2 = GALLERY_IMAGES_ROW2.slice(0, 10);

function HeroMockup({ className = "", alt }: { className?: string; alt: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="animate-float w-full max-w-[400px] sm:max-w-[420px] lg:max-w-[580px] xl:max-w-[680px]">
        <div className="relative w-full" style={{ aspectRatio: "1024 / 785" }}>
          <picture>
            <source
              media="(max-width: 1023px)"
              srcSet="/images/mockup-hero-640.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 1024px)"
              srcSet="/images/mockup-hero.avif"
              type="image/avif"
            />
            {/* Static file: the optimizer round-trip was delaying the LCP image. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mockup-hero.webp"
              alt={alt}
              width={1024}
              height={785}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).hero;
  return (
    <section id="inicio" className="relative min-h-screen overflow-x-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-graphite/30 via-luxury-black to-luxury-black" />
      <div className="absolute right-0 top-1/4 hidden h-[500px] w-[500px] rounded-full bg-luxury-gold/5 blur-[120px] lg:block" />
      <div className="absolute bottom-0 left-0 hidden h-[300px] w-[300px] rounded-full bg-luxury-gold/3 blur-[100px] lg:block" />

      <link
        rel="preload"
        as="image"
        href="/images/mockup-hero-640.webp"
        type="image/webp"
        media="(max-width: 1023px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/images/mockup-hero.avif"
        type="image/avif"
        media="(min-width: 1024px)"
        fetchPriority="high"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-12 lg:pb-16 lg:pt-20">
        <div className="grid items-center lg:grid-cols-2 lg:gap-16">
          <div className="flex w-full min-w-0 flex-col items-center text-center lg:col-start-1 lg:row-start-1 lg:items-start lg:text-left">
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
                {t.badge}{" "}
                <span className="gold-gradient-text font-semibold">Criativarts</span>
              </span>
            </div>

            <h1 className="font-display text-5xl font-light leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Mega Pack{" "}
              <span className="gold-gradient-text font-medium italic">Deluxe</span>
            </h1>

            <p className="mt-4 font-display text-xl font-light italic text-luxury-silver md:text-2xl">
              {t.subtitle}
            </p>

            <div className="gold-line my-8 w-24 lg:mx-0" />

          </div>

          <HeroMockup
            alt={t.mockupAlt}
            className="my-8 w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:my-0"
          />

          <div className="flex w-full min-w-0 flex-col items-center text-center lg:col-start-1 lg:row-start-2 lg:items-start lg:text-left">
            <p className="max-w-lg text-sm font-light leading-relaxed text-white/70 md:text-base lg:text-lg">
              {t.body}
            </p>

            <div className="relative -mx-6 my-8 min-h-[27rem] w-[calc(100%+3rem)] max-w-[calc(100%+3rem)] min-w-0 space-y-4 overflow-hidden touch-pan-y lg:hidden">
              <ArtCarousel images={CAROUSEL_ROW1} direction="left" locale={locale} />
              <ArtCarousel
                images={CAROUSEL_ROW2}
                direction="right"
                imageBasePath="/images/row2"
                locale={locale}
              />
            </div>
          </div>
        </div>

        <HeroArtGrid locale={locale} />

        <div className="mt-10 flex flex-col items-center">
          <CheckoutCTA locale={locale} size="large" />
        </div>
      </div>
    </section>
  );
}
