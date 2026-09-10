"use client";

import { useEffect, useState } from "react";
import { GALLERY_IMAGES } from "@/lib/constants";
import { ArtImage } from "./ArtImage";

export function HeroArtGrid() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setShow(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (!show) return null;

  const desktopImages = GALLERY_IMAGES.slice(0, 10);

  return (
    <div className="mt-12 grid grid-cols-5 gap-3">
      {desktopImages.map((id) => (
        <div
          key={id}
          className="relative aspect-[2/3] overflow-hidden rounded-lg"
        >
          <ArtImage
            imageId={id}
            fill
            sizes="20vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
