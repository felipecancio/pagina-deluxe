import Image from "next/image";
import { AnimatedSection } from "../AnimatedSection";
import { TESTIMONIALS } from "@/lib/constants";

function Stars() {
  return (
    <div className="flex gap-0.5 text-luxury-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.7 6.6 7.1.6-5.4 4.6 1.6 7-6-3.7-6 3.7 1.6-7-5.4-4.6 7.1-.6L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

function VerifiedBadge() {
  return (
    <span
      className="flex h-5 w-5 items-center justify-center rounded-full bg-luxury-gold text-luxury-black"
      aria-label="Verificado"
    >
      <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Testimonials() {
  return (
    <AnimatedSection>
      <section className="section-padding !pt-4 md:!pt-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
              Testimonios
            </p>
            <h2 className="mt-3 font-display text-4xl font-light md:text-5xl">
              Lo que dicen quienes ya tienen el{" "}
              <span className="gold-gradient-text italic">Deluxe</span>
            </h2>
            <div className="gold-line mx-auto mt-6 w-16" />
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {TESTIMONIALS.map((item) => (
              <article
                key={item.name}
                className="luxury-card flex flex-col p-6 md:p-8"
              >
                <div className="mb-5 flex items-center justify-between">
                  <Stars />
                  <VerifiedBadge />
                </div>

                <p className="flex-1 font-display text-[17px] font-light italic leading-relaxed text-white/70">
                  “{item.quote}”
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border border-luxury-gold/30">
                    <Image
                      src={item.photo}
                      alt={item.name}
                      width={88}
                      height={88}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <p className="font-display text-base font-medium text-white/90">
                    {item.name}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
