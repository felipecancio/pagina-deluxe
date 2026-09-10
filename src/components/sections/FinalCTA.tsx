import { AnimatedSection } from "../AnimatedSection";
import { CheckoutCTA } from "../CheckoutCTA";
import { IconCheck } from "../Icons";
import { FINAL_BENEFITS } from "@/lib/constants";
import Image from "next/image";

export function FinalCTA() {
  return (
    <AnimatedSection>
      <section
        id="comprar"
        className="section-padding bg-gradient-to-b from-luxury-black via-luxury-graphite/40 to-luxury-black"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
            Empieza hoy
          </p>
          <h2 className="mt-3 font-display text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            Eleva el nivel de{" "}
            <span className="gold-gradient-text italic">tus productos</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/60 md:text-lg">
            Obtén ahora la colección premium de Criativarts y ofrece diseños
            que destacan por calidad, elegancia y alto valor percibido.
          </p>

          <div className="mx-auto mt-10 flex items-center justify-center">
            <div className="animate-float">
              <Image
                src="/images/mockup-hero.webp"
                alt="Mega Pack Deluxe — Colección Premium Criativarts"
                width={720}
                height={550}
                quality={80}
                sizes="(min-width: 1024px) 520px, 420px"
                className="h-auto w-full max-w-[400px] object-contain sm:max-w-[420px] lg:max-w-[520px]"
              />
            </div>
          </div>

          <ul className="mx-auto mt-10 max-w-lg space-y-3 text-left">
            {FINAL_BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-luxury-gold" />
                <span className="text-sm font-light text-white/75 md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <CheckoutCTA size="large" />
          </div>

          <p className="mt-6 flex items-center justify-center gap-2.5 text-xs font-light uppercase tracking-[0.18em] text-white/30">
            <svg
              className="h-3.5 w-3.5 text-luxury-gold/70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M12 3l8 4v5c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V7l8-4z" />
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Pago Seguro
            <svg
              className="h-3.5 w-3.5 text-luxury-gold/70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M12 3l8 4v5c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V7l8-4z" />
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </p>
        </div>
      </section>
    </AnimatedSection>
  );
}
