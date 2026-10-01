"use client";

import { CHECKOUT_URL } from "@/lib/constants";
import { getDictionary, type Locale } from "@/lib/i18n";
import { META_CONTENT, trackMeta } from "@/lib/meta-pixel";

interface CheckoutCTAProps {
  className?: string;
  size?: "default" | "large";
  showHint?: boolean;
  align?: "center" | "start";
  label?: string;
  checkout?: boolean;
  locale: Locale;
}

export function CheckoutCTA({
  className = "",
  size = "default",
  showHint = true,
  align = "center",
  label,
  checkout = false,
  locale,
}: CheckoutCTAProps) {
  const copy = getDictionary(locale);
  const yesSizeClasses =
    size === "large"
      ? "px-10 py-5 text-base tracking-[0.12em] md:tracking-[0.15em]"
      : "px-8 py-4 text-sm tracking-[0.1em]";

  const alignClasses =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignClasses} ${className}`}>
      <a
        href={checkout ? CHECKOUT_URL : "#comprar"}
        id={checkout ? "cta-checkout" : undefined}
        className={`btn-gold w-full max-w-xl sm:w-auto ${yesSizeClasses}`}
        onClick={
          checkout
            ? () => trackMeta("InitiateCheckout", { ...META_CONTENT })
            : undefined
        }
      >
        {label ?? copy.cta}
      </a>
      {showHint && (
        <p className="text-xs font-light tracking-wide text-white/40">
          {copy.ctaHint}
        </p>
      )}
    </div>
  );
}
