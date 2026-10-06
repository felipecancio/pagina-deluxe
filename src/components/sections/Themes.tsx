import { AnimatedSection } from "../AnimatedSection";
import { getDictionary, type Locale } from "@/lib/i18n";

export function Themes({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).themes;
  if (!t) return null;

  return (
    <AnimatedSection>
      <section className="px-6 pb-16 pt-16 md:px-12 md:pb-24 md:pt-24 lg:px-20 lg:pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="font-display text-[1.7rem] font-light leading-[1.15] sm:text-4xl md:text-5xl">
              {t.titleBefore}{" "}
              <span className="gold-gradient-text italic">{t.titleHighlight}</span>
            </h2>
            <div className="gold-line mx-auto mt-5 w-16" />
          </div>

          <ul className="mt-7 grid grid-cols-2 gap-2 sm:mt-9 sm:gap-3 lg:grid-cols-4">
            {t.items.map((item) => (
              <li
                key={item}
                className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] px-2 py-2.5 text-center font-display text-[13px] font-light leading-snug text-white/85 sm:px-3 sm:py-3.5 sm:text-base"
              >
                <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/80 to-transparent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AnimatedSection>
  );
}
