import { AnimatedSection } from "../AnimatedSection";
import { getDictionary, type Locale } from "@/lib/i18n";

function ExclusiveSeal({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div className="relative mx-auto h-40 w-40 shrink-0 md:h-44 md:w-44">
      <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="seal-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D5A3" />
            <stop offset="45%" stopColor="#C9A962" />
            <stop offset="100%" stopColor="#9A7B3C" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="76" fill="#0A0A0A" stroke="url(#seal-gold)" strokeWidth="1.5" />
        <circle cx="80" cy="80" r="70" fill="none" stroke="url(#seal-gold)" strokeWidth="0.6" opacity="0.45" />
        <circle cx="80" cy="62" r="28" fill="none" stroke="url(#seal-gold)" strokeWidth="1" />
        <path
          d="M80 40 L85 55 L101 55 L88 65 L93 81 L80 72 L67 81 L72 65 L59 55 L75 55 Z"
          fill="url(#seal-gold)"
        />
        <text
          x="80"
          y="112"
          textAnchor="middle"
          fill="#E8D5A3"
          fontSize="10"
          letterSpacing="2.2"
          fontFamily="Georgia, serif"
        >
          {top}
        </text>
        <text
          x="80"
          y="128"
          textAnchor="middle"
          fill="#C9A962"
          fontSize="9"
          letterSpacing="1.6"
          fontFamily="Georgia, serif"
        >
          {bottom}
        </text>
      </svg>
    </div>
  );
}

export function Guarantee({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).guarantee;
  return (
    <AnimatedSection>
      <section className="section-padding !py-16 md:!py-20">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-luxury-gold/30 bg-gradient-to-br from-luxury-graphite via-luxury-black to-luxury-charcoal px-8 py-12 text-center md:px-14 md:py-14">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-luxury-gold/10 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-luxury-gold/5 blur-3xl" />

            <div className="relative">
              <ExclusiveSeal top={t.sealTop} bottom={t.sealBottom} />

              <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
                {t.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-light md:text-4xl">
                {t.titleBefore}{" "}
                <span className="gold-gradient-text italic">{t.titleHighlight}</span>
              </h2>
              <div className="gold-line mx-auto mt-5 w-16" />
              <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-white/60 md:text-base">
                {t.before}
                <span className="text-luxury-gold/80">{t.highlight}</span>
                {t.after}
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
