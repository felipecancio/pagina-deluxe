"use client";

import { useEffect, useRef, useState } from "react";
import { ArtImage } from "./ArtImage";

export function DeferredGallery({
  tiles,
}: {
  tiles: { src: string; alt: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "600px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {tiles.map((tile) => (
        <div
          key={tile.src}
          className="group relative aspect-[2/3] overflow-hidden rounded-xl bg-luxury-graphite"
        >
          {visible ? (
            <ArtImage
              src={tile.src}
              alt={tile.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : null}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-luxury-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}
