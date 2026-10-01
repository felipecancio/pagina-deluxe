import { AnimatedSection } from "../AnimatedSection";
import { getDictionary, type Locale } from "@/lib/i18n";

export function Problem({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).problem;
  return (
    <AnimatedSection>
      <div className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-light leading-tight md:text-5xl">
            {t.titleBefore}{" "}
            <span className="gold-gradient-text italic">{t.titleHighlight}</span>
          </h2>
          <div className="gold-line mx-auto mt-6 w-16" />
          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-white/60 md:text-lg">
            {t.body}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {t.cards.map((item) => (
            <div key={item.title} className="luxury-card p-7 text-left">
              <h3 className="font-display text-xl font-medium">{item.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/50">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
