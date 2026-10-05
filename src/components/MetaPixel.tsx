"use client";

import { useEffect } from "react";
import { META_CONTENT, META_PIXEL_ID } from "@/lib/meta-pixel";
import { getDictionary, type Locale } from "@/lib/i18n";

export function MetaPixel({ locale }: { locale: Locale }) {
  const pixelScript = getDictionary(locale).pixelScript;

  useEffect(() => {
    let loaded = false;
    let timer = 0;

    const load = () => {
      if (loaded || window.fbq) return;
      loaded = true;
      window.removeEventListener("pointerdown", load);
      window.removeEventListener("keydown", load);
      window.removeEventListener("scroll", load);
      window.clearTimeout(timer);

      const script = document.createElement("script");
      script.src = `https://connect.facebook.net/${pixelScript}/fbevents.js`;
      script.async = true;
      script.onload = () => {
        window.fbq?.("init", META_PIXEL_ID);
        window.fbq?.("track", "PageView");
        window.fbq?.("track", "ViewContent", { ...META_CONTENT });
      };
      document.body.appendChild(script);
    };

    window.addEventListener("pointerdown", load, { once: true, passive: true });
    window.addEventListener("keydown", load, { once: true });
    window.addEventListener("scroll", load, { once: true, passive: true });
    timer = window.setTimeout(load, 12000);

    return () => {
      window.removeEventListener("pointerdown", load);
      window.removeEventListener("keydown", load);
      window.removeEventListener("scroll", load);
      window.clearTimeout(timer);
    };
  }, [pixelScript]);

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height={1}
        width={1}
        alt=""
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
      />
    </noscript>
  );
}
