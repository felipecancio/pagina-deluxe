import { AnimatedSection } from "../AnimatedSection";

export function Problem() {
  return (
    <AnimatedSection>
      <div className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-luxury-gold">
            El verdadero problema
          </p>
          <h2 className="mt-3 font-display text-4xl font-light leading-tight md:text-5xl">
            Tus productos compiten con{" "}
            <span className="gold-gradient-text italic">miles iguales</span>
          </h2>
          <div className="gold-line mx-auto mt-6 w-16" />
          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-white/60 md:text-lg">
            El mercado está lleno de los mismos archivos. Cuando el diseño se ve
            genérico, el cliente no percibe lujo: compara precio, pide descuento
            y se va con el más barato. Tú produces más… y ganas menos.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            {
              title: "Diseños quemados",
              text: "Los packs comunes reciclan las mismas piezas. El cliente ya las vio en otro lado.",
            },
            {
              title: "Se ven baratos",
              text: "Sin acabado premium, tu producto parece promocional. El precio se viene abajo.",
            },
            {
              title: "Cero diferenciación",
              text: "Si tu catálogo no destaca, compites por volumen. El Deluxe existe para romper eso.",
            },
          ].map((item) => (
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
