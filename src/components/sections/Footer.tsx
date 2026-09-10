export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10 text-center">
      <p className="font-display text-lg font-light tracking-wide text-white/40">
        Criativarts
      </p>
      <p className="mt-2 text-xs text-white/25">
        Mega Pack Deluxe — Todos los derechos reservados
      </p>
      <div className="mt-4 flex justify-center gap-6 text-xs text-white/30">
        <a href="#galeria" className="hover:text-luxury-gold">
          Diseños
        </a>
        <a href="#comprar" className="hover:text-luxury-gold">
          Qué incluye
        </a>
        <a href="#faq" className="hover:text-luxury-gold">
          Preguntas
        </a>
        <a href="#comprar" className="hover:text-luxury-gold">
          Obtener acceso
        </a>
      </div>
    </footer>
  );
}
