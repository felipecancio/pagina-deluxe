const ACCEPT_PATTERNS =
  /sí|si\b|quiero|aceptar|agregar|comprar|deluxe|también|tambien|yes|accept/i;
const DECLINE_PATTERNS =
  /no quiero|rechazar|declinar|omitir|no gracias|pasar|decline|skip|cancelar/i;

export function getElementLabel(el: HTMLElement): string {
  return (
    el.textContent?.trim() ||
    el.getAttribute("aria-label") ||
    el.getAttribute("title") ||
    ""
  );
}

function collectClickables(root: ParentNode): HTMLElement[] {
  const results: HTMLElement[] = [];

  root.querySelectorAll<HTMLElement>(
    'button, a, [role="button"], input[type="button"], input[type="submit"]'
  ).forEach((el) => {
    if (!el.hasAttribute("disabled")) results.push(el);
  });

  root.querySelectorAll<HTMLElement>("*").forEach((el) => {
    if (el.shadowRoot) {
      results.push(...collectClickables(el.shadowRoot));
    }
  });

  return results;
}

export function findHotmartButtons(container: HTMLElement): {
  accept: HTMLElement | null;
  decline: HTMLElement | null;
} {
  const clickables = collectClickables(container);

  let accept: HTMLElement | null = null;
  let decline: HTMLElement | null = null;

  for (const el of clickables) {
    const label = getElementLabel(el);
    if (DECLINE_PATTERNS.test(label)) {
      decline = el;
      continue;
    }
    if (ACCEPT_PATTERNS.test(label)) {
      accept = el;
    }
  }

  if (!accept && !decline && clickables.length >= 2) {
    return {
      accept: clickables[0],
      decline: clickables[clickables.length - 1],
    };
  }

  if (!accept && clickables.length === 1) {
    accept = clickables[0];
  }

  if (!decline && clickables.length >= 2) {
    const secondary = clickables.find((el) => el !== accept);
    decline = secondary ?? null;
  }

  return { accept, decline };
}

export function triggerHotmartClick(el: HTMLElement | null): boolean {
  if (!el) return false;
  el.click();
  return true;
}
