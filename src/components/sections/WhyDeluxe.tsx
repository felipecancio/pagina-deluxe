import { AnimatedSection } from "../AnimatedSection";
import { FeatureIcon } from "../Icons";
import { getDictionary, type Locale } from "@/lib/i18n";

export function WhyDeluxe({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).why;
  return (
    <AnimatedSection>
      <section className="section-padding bg-luxury-graphite/30">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl font-light md:text-5xl">
              {t.titleBefore}{" "}
              <span className="gold-gradient-text italic">{t.titleHighlight}</span>
            </h2>
            <div className="gold-line mx-auto mt-6 w-16" />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {t.items.map((item, i) => (
              <div
                key={item.title}
                className="luxury-card group p-4 sm:p-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold transition-colors duration-500 group-hover:border-luxury-gold/40 group-hover:bg-luxury-gold/10 sm:mb-5 sm:h-12 sm:w-12">
                  <FeatureIcon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-medium sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-light text-white/50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
