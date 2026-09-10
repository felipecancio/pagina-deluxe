import { AnimatedSection } from "../AnimatedSection";
import { FeatureIcon } from "../Icons";
import { WHY_DELUXE } from "@/lib/constants";

export function WhyDeluxe() {
  return (
    <AnimatedSection>
      <section className="section-padding bg-luxury-graphite/30">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
              La diferencia
            </p>
            <h2 className="mt-3 font-display text-4xl font-light md:text-5xl">
              Por qué tus productos se ven más{" "}
              <span className="gold-gradient-text italic">caros</span>
            </h2>
            <div className="gold-line mx-auto mt-6 w-16" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_DELUXE.map((item, i) => (
              <div
                key={item.title}
                className="luxury-card group p-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold transition-colors duration-500 group-hover:border-luxury-gold/40 group-hover:bg-luxury-gold/10">
                  <FeatureIcon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-medium">
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
