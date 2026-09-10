"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5522998455928";
const WHATSAPP_MESSAGE =
  "Hola, me gustaría obtener más información sobre el Mega Pack Deluxe";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const CONFIRM_MS = 8000;

export function WhatsAppSupport() {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const closeBox = useCallback(() => {
    clearTimer();
    setOpen(false);
  }, [clearTimer]);

  const openWhatsApp = useCallback(() => {
    closeBox();
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  }, [closeBox]);

  const handleIconClick = useCallback(() => {
    if (open) {
      openWhatsApp();
      return;
    }
    setOpen(true);
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      setOpen(false);
      timerRef.current = null;
    }, CONFIRM_MS);
  }, [clearTimer, open, openWhatsApp]);

  useEffect(() => () => clearTimer(), [clearTimer]);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <button
          type="button"
          onClick={openWhatsApp}
          className="rounded-full border border-luxury-gold/40 bg-luxury-black/95 px-4 py-2 text-xs font-light tracking-wide text-white/85 shadow-gold backdrop-blur-md transition-colors hover:border-luxury-gold hover:text-luxury-gold"
        >
          Hablar con representante
        </button>
      )}

      <button
        type="button"
        onClick={handleIconClick}
        aria-expanded={open}
        aria-label={
          open
            ? "Hablar con representante por WhatsApp"
            : "Abrir soporte de WhatsApp"
        }
        className="flex h-12 w-12 items-center justify-center rounded-full border border-luxury-gold/40 bg-luxury-black/90 text-luxury-gold shadow-gold backdrop-blur-md transition-all duration-300 hover:border-luxury-gold hover:shadow-gold-lg hover:scale-105 active:scale-95"
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01Zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.22 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74 1.64.71 2.09.72 2.83.6.43-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.10-.23-.17-.48-.29Z" />
        </svg>
      </button>
    </div>
  );
}
