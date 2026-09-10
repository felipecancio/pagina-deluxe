import { AnimatedSection } from "../AnimatedSection";
import { COMPARISON } from "@/lib/constants";
import { IconCheck } from "../Icons";

export function Comparison() {
  return (
    <AnimatedSection>
      <section className="section-padding bg-luxury-graphite/20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
              Comparación
            </p>
            <h2 className="mt-3 font-display text-4xl font-light md:text-5xl">
              Por qué el Deluxe{" "}
              <span className="gold-gradient-text italic">vende más</span>
            </h2>
            <div className="gold-line mx-auto mt-6 w-16" />
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            {/* Standard */}
            <div className="luxury-card flex flex-col p-8 md:p-10">
              <h3 className="font-display text-2xl font-light text-white/70">
                {COMPARISON.standard.title}
              </h3>
              <div className="gold-line my-6" />
              <ul className="flex flex-1 flex-col gap-4">
                {COMPARISON.standard.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white/50"
                  >
                    <IconCheck className="h-4 w-4 shrink-0 text-white/30" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VS */}
            <div className="flex items-center justify-center py-4 md:py-0">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-luxury-gold/30 bg-luxury-gold/5">
                <span className="font-display text-lg italic text-luxury-gold">
                  vs
                </span>
              </div>
            </div>

            {/* Deluxe */}
            <div className="relative overflow-hidden rounded-2xl border border-luxury-gold/30 bg-gradient-to-br from-luxury-graphite to-luxury-charcoal p-8 shadow-gold md:p-10">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-luxury-gold/10 blur-2xl" />
              <div className="relative">
                <div className="mb-1 inline-block rounded-full border border-luxury-gold/40 bg-luxury-gold/10 px-3 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-luxury-gold">
                  Recomendado
                </div>
                <h3 className="mt-2 font-display text-2xl font-medium">
                  {COMPARISON.deluxe.title}
                </h3>
                <div className="gold-line my-6" />
                <ul className="flex flex-col gap-4">
                  {COMPARISON.deluxe.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <IconCheck className="h-4 w-4 shrink-0 text-luxury-gold" />
                      <span className="text-sm text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
