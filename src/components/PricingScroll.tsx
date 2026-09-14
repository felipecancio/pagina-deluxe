"use client";

import { useEffect } from "react";

function scrollToPricing() {
  const el = document.getElementById("comprar");
  if (!el) return;

  document
    .querySelectorAll(".animate-on-scroll")
    .forEach((node) => node.classList.add("visible"));

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function PricingScroll() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a[href="#comprar"]');
      if (!link) return;

      event.preventDefault();
      history.pushState(null, "", "#comprar");
      requestAnimationFrame(scrollToPricing);
    };

    document.addEventListener("click", onClick);

    if (window.location.hash === "#comprar") {
      requestAnimationFrame(scrollToPricing);
    }

    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
