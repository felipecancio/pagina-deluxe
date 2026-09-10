"use client";

import { useHotmartFunnel } from "./HotmartSalesFunnel";

interface HotmartCTAProps {
  className?: string;
  size?: "default" | "large";
  showDecline?: boolean;
  align?: "center" | "start";
}

export function HotmartCTA({
  className = "",
  size = "default",
  showDecline = true,
  align = "center",
}: HotmartCTAProps) {
  const { triggerAccept, triggerDecline } = useHotmartFunnel();

  const yesSizeClasses =
    size === "large"
      ? "px-10 py-5 text-base tracking-[0.12em] md:tracking-[0.15em]"
      : "px-8 py-4 text-sm tracking-[0.1em]";

  const alignClasses =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignClasses} ${className}`}>
      <button
        type="button"
        onClick={triggerAccept}
        className={`btn-gold w-full max-w-xl sm:w-auto ${yesSizeClasses}`}
      >
        Sí, también quiero el Mega Pack Deluxe
      </button>

      {showDecline && (
        <button
          type="button"
          onClick={triggerDecline}
          className="text-sm font-light text-white/35 underline-offset-4 transition-colors hover:text-white/55 hover:underline"
        >
          No quiero esta oferta especial
        </button>
      )}
    </div>
  );
}
