import { getDictionary, type Locale } from "@/lib/i18n";

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).header;
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-luxury-black/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-12">
        <a href="#inicio" className="font-display text-lg font-light tracking-wide text-white/90">
          Mega Pack{" "}
          <span className="gold-gradient-text font-medium italic">Deluxe</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/50 md:flex">
          <a href="#galeria" className="transition-colors hover:text-luxury-gold">
            {t.designs}
          </a>
          <a href="#comprar" className="transition-colors hover:text-luxury-gold">
            {t.includes}
          </a>
          <a href="#faq" className="transition-colors hover:text-luxury-gold">
            {t.questions}
          </a>
        </nav>
        <a
          href="#comprar"
          className="btn-gold !px-5 !py-2 text-[11px] tracking-[0.14em]"
        >
          {t.access}
        </a>
      </div>
    </header>
  );
}
