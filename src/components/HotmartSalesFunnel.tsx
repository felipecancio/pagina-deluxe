"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  findHotmartButtons,
  triggerHotmartClick,
} from "@/lib/hotmart-funnel";

interface HotmartFunnelContextValue {
  ready: boolean;
  triggerAccept: () => void;
  triggerDecline: () => void;
}

const HotmartFunnelContext = createContext<HotmartFunnelContextValue>({
  ready: false,
  triggerAccept: () => {},
  triggerDecline: () => {},
});

export function useHotmartFunnel() {
  return useContext(HotmartFunnelContext);
}

const HOTMART_SCRIPT_SRC =
  "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";

export function HotmartSalesFunnel({ children }: { children: React.ReactNode }) {
  const acceptButtonRef = useRef<HTMLElement | null>(null);
  const declineButtonRef = useRef<HTMLElement | null>(null);
  const [ready, setReady] = useState(false);

  const bindButtons = useCallback((container: HTMLElement) => {
    const { accept, decline } = findHotmartButtons(container);
    if (accept) {
      acceptButtonRef.current = accept;
      setReady(true);
    }
    if (decline) declineButtonRef.current = decline;
  }, []);

  useEffect(() => {
    const container = document.getElementById("hotmart-sales-funnel");
    if (!container) return;

    let mounted = true;
    let observer: MutationObserver | null = null;

    const tryBind = () => {
      if (!mounted) return;
      bindButtons(container);
    };

    const mountWidget = () => {
      try {
        if (typeof checkoutElements === "undefined") return;
        checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel");
      } catch {
        /* widget só funciona no funil Hotmart */
      }
      window.setTimeout(tryBind, 200);
      window.setTimeout(tryBind, 1000);
      window.setTimeout(tryBind, 3000);
    };

    const loadWidget = () => {
      if (typeof checkoutElements !== "undefined") {
        mountWidget();
        return;
      }

      const existingScript = document.querySelector<HTMLScriptElement>(
        `script[src="${HOTMART_SCRIPT_SRC}"]`
      );

      if (existingScript) {
        if (existingScript.dataset.loaded === "true") {
          mountWidget();
        } else {
          existingScript.addEventListener("load", mountWidget, { once: true });
        }
        return;
      }

      const script = document.createElement("script");
      script.src = HOTMART_SCRIPT_SRC;
      script.async = true;
      script.onload = () => {
        script.dataset.loaded = "true";
        mountWidget();
      };
      document.body.appendChild(script);
    };

    observer = new MutationObserver(tryBind);
    observer.observe(container, { childList: true, subtree: true });

    loadWidget();
    tryBind();

    const fallbackReady = window.setTimeout(() => {
      if (mounted) setReady(true);
    }, 4000);

    return () => {
      mounted = false;
      observer?.disconnect();
      window.clearTimeout(fallbackReady);
    };
  }, [bindButtons]);

  const triggerAccept = useCallback(() => {
    const container = document.getElementById("hotmart-sales-funnel");
    if (container) bindButtons(container);
    triggerHotmartClick(acceptButtonRef.current);
  }, [bindButtons]);

  const triggerDecline = useCallback(() => {
    const container = document.getElementById("hotmart-sales-funnel");
    if (container) bindButtons(container);
    triggerHotmartClick(declineButtonRef.current);
  }, [bindButtons]);

  const value = useMemo(
    () => ({ ready, triggerAccept, triggerDecline }),
    [ready, triggerAccept, triggerDecline]
  );

  return (
    <HotmartFunnelContext.Provider value={value}>
      <div id="hotmart-sales-funnel" aria-hidden="true" />
      {children}
    </HotmartFunnelContext.Provider>
  );
}
