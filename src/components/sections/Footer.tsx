import { getDictionary, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).footer;

  return (
    <footer className="border-t border-white/5 px-6 py-10 text-center">
      <p className="font-display text-lg font-light tracking-wide text-white/40">
        Criativarts
      </p>
      <p className="mt-2 text-xs text-white/25">{t.rights}</p>
      <div className="mt-4 flex justify-center gap-6 text-xs text-white/30">
        <a href="#galeria" className="hover:text-luxury-gold">
          {t.designs}
        </a>
        <a href="#comprar" className="hover:text-luxury-gold">
          {t.includes}
        </a>
        <a href="#faq" className="hover:text-luxury-gold">
          {t.questions}
        </a>
        <a href="#comprar" className="hover:text-luxury-gold">
          {t.access}
        </a>
      </div>
    </footer>
  );
}
