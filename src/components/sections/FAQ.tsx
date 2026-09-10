"use client";

import { AnimatedSection } from "../AnimatedSection";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <AnimatedSection>
      <section id="faq" className="section-padding">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
              Preguntas frecuentes
            </p>
            <h2 className="mt-3 font-display text-4xl font-light md:text-5xl">
              Todo claro,{" "}
              <span className="gold-gradient-text italic">sin letras chicas</span>
            </h2>
            <div className="gold-line mx-auto mt-6 w-16" />
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((item) => (
              <details key={item.question} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left">
                  <span className="font-display text-lg font-medium text-white/90 md:text-xl">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-luxury-gold/30 text-luxury-gold transition-transform duration-300 group-open:rotate-45">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-5 pr-12 text-sm font-light leading-relaxed text-white/55 md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
