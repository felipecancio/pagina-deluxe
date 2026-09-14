export const META_PIXEL_ID = "1221625573293986";

export const META_CONTENT = {
  content_name: "Mega Pack Deluxe",
  content_ids: ["mega-pack-deluxe"],
  content_type: "product",
} as const;

type Fbq = ((...args: unknown[]) => void) & { queue?: unknown[] };

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

export function trackMeta(
  event: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }
  window.fbq("track", event, params);
}
