"use client";

import { CHECKOUT_URL, CTA_LABEL } from "@/lib/constants";
import { META_CONTENT, trackMeta } from "@/lib/meta-pixel";

interface CheckoutCTAProps {
  className?: string;
  size?: "default" | "large";
  showHint?: boolean;
  align?: "center" | "start";
  label?: string;
}

export function CheckoutCTA({
  className = "",
  size = "default",
  showHint = true,
  align = "center",
  label = CTA_LABEL,
}: CheckoutCTAProps) {
  const yesSizeClasses =
    size === "large"
      ? "px-10 py-5 text-base tracking-[0.12em] md:tracking-[0.15em]"
      : "px-8 py-4 text-sm tracking-[0.1em]";

  const alignClasses =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignClasses} ${className}`}>
      <a
        href={CHECKOUT_URL}
        className={`btn-gold w-full max-w-xl sm:w-auto ${yesSizeClasses}`}
        onClick={() => trackMeta("InitiateCheckout", { ...META_CONTENT })}
      >
        {label}
      </a>
      {showHint && (
        <p className="text-xs font-light tracking-wide text-white/40">
          Acceso inmediato · Uso comercial · Actualizaciones de por vida
        </p>
      )}
    </div>
  );
}
