import { AnimatedSection } from "../AnimatedSection";
import { ArtImage } from "../ArtImage";
import { CheckoutCTA } from "../CheckoutCTA";
import { MOSAIC_EXCLUSIVE, MOSAIC_PACK } from "@/lib/constants";
import { getDictionary, type Locale } from "@/lib/i18n";

function MosaicTile({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="group relative aspect-[2/3] overflow-hidden rounded-xl">
      <ArtImage
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 25vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-luxury-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

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

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {MOSAIC_EXCLUSIVE.map((src, i) => (
              <MosaicTile
                key={src}
                src={src}
                alt={`${t.exclusiveAlt} ${i + 1}`}
              />
            ))}
            {MOSAIC_PACK.map((id) => (
              <MosaicTile
                key={id}
                src={`/images/${id}.webp`}
                alt={`${t.premiumAlt} ${id}`}
              />
            ))}
          </div>

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
