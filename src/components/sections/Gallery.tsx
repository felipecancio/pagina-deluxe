import { AnimatedSection } from "../AnimatedSection";
import { CheckoutCTA } from "../CheckoutCTA";
import { DeferredGallery } from "../DeferredGallery";
import { MOSAIC_EXCLUSIVE, MOSAIC_PACK } from "@/lib/constants";
import { getDictionary, type Locale } from "@/lib/i18n";

export function Gallery({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).gallery;
  return (
    <AnimatedSection>
      <section id="galeria" className="section-padding !pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl font-light md:text-5xl">
              {t.titleBefore}{" "}
              <span className="gold-gradient-text italic">{t.titleHighlight}</span>
            </h2>
            <div className="gold-line mx-auto mt-6 w-16" />
            <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/55 md:text-base">
              {t.body}
            </p>
          </div>

          <DeferredGallery
            tiles={[
              ...MOSAIC_EXCLUSIVE.map((src, i) => ({
                src,
                alt: `${t.exclusiveAlt} ${i + 1}`,
              })),
              ...MOSAIC_PACK.map((id) => ({
                src: `/images/${id}.webp`,
                alt: `${t.premiumAlt} ${id}`,
              })),
            ]}
          />

          <p className="mt-8 text-center text-sm font-light text-white/40">
            {t.footnote}
          </p>

          <div className="mt-8 flex justify-center">
            <CheckoutCTA locale={locale} />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
