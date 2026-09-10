import { AnimatedSection } from "../AnimatedSection";

export function Positioning() {
  return (
    <AnimatedSection>
      <div className="section-padding !py-12">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-luxury-gold/30 bg-gradient-to-r from-luxury-graphite via-luxury-charcoal to-luxury-graphite p-8 md:p-10">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-luxury-gold/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-luxury-gold/5 blur-2xl" />

            <div className="relative flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-luxury-gold/40 bg-luxury-gold/10">
                <svg
                  className="h-6 w-6 text-luxury-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M12 15v2M12 9v2M12 2l3 7h7l-5.5 4.5 2 7.5L12 17l-6.5 4 2-7.5L2 9h7l3-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-luxury-gold">
                  No es cantidad. Es curaduría.
                </p>
                <h2 className="mt-1 font-display text-2xl font-light md:text-3xl">
                  La colección más exclusiva de Criativarts
                </h2>
                <p className="mt-2 text-sm text-white/50">
                  Creada para emprendedores y negocios que quieren productos con
                  cara de lujo — y un margen que lo acompañe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
