import { AnimatedSection } from "../AnimatedSection";
import { FeatureIcon } from "../Icons";
import { USE_CASES } from "@/lib/constants";

export function Benefits() {
  return (
    <AnimatedSection>
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
              Aplicaciones
            </p>
            <h2 className="mt-3 font-display text-4xl font-light md:text-5xl">
              Diseños premium para{" "}
              <span className="gold-gradient-text italic">tu negocio</span>
            </h2>
            <div className="gold-line mx-auto mt-6 w-16" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {USE_CASES.map((item) => (
              <div
                key={item.title}
                className="luxury-card group flex flex-col items-center p-6 text-center"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-luxury-gold/20 text-luxury-gold transition-all duration-500 group-hover:border-luxury-gold/50 group-hover:shadow-gold">
                  <FeatureIcon name={item.icon} className="h-5 w-5" />
                </div>
                <span className="text-sm font-light text-white/70">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
