"use client";

import { useEffect, useRef, useCallback } from "react";
import { ArtImage } from "./ArtImage";

interface ArtCarouselProps {
  images: readonly number[];
  direction?: "left" | "right";
  imageBasePath?: string;
}

const CARD_WIDTH = 130;
const CARD_GAP = 12;
const ARROW_CARDS = 3;
const ARROW_STEP = (CARD_WIDTH + CARD_GAP) * ARROW_CARDS;

function wrapPosition(pos: number, halfWidth: number): number {
  if (halfWidth <= 0) return pos;
  while (pos <= -halfWidth) pos += halfWidth;
  while (pos > 0) pos -= halfWidth;
  return pos;
}

export function ArtCarousel({
  images,
  direction = "left",
  imageBasePath = "/images",
}: ArtCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const halfWidthRef = useRef(0);
  const positionRef = useRef(0);
  const defaultVelocity = direction === "left" ? -0.45 : 0.45;
  const velocityRef = useRef(defaultVelocity);
  const rafRef = useRef<number>(0);
  const visibleRef = useRef(true);
  const initializedRef = useRef(false);

  const applyWrap = useCallback(() => {
    positionRef.current = wrapPosition(positionRef.current, halfWidthRef.current);
  }, []);

  const nudge = useCallback(
    (nav: "prev" | "next") => {
      const forward = direction === "left" ? -ARROW_STEP : ARROW_STEP;
      const back = -forward;

      positionRef.current += nav === "next" ? forward : back;
      applyWrap();
      velocityRef.current =
        nav === "next" ? defaultVelocity * 5.5 : -defaultVelocity * 5.5;

      window.setTimeout(() => {
        velocityRef.current = defaultVelocity;
      }, 900);
    },
    [applyWrap, defaultVelocity, direction]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
      if (!initializedRef.current && halfWidthRef.current > 0) {
        positionRef.current =
          direction === "right" ? -halfWidthRef.current : 0;
        initializedRef.current = true;
      }
      applyWrap();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);

    const animate = () => {
      if (visibleRef.current) {
        positionRef.current += velocityRef.current;
      }
      applyWrap();
      track.style.transform = `translateX(${positionRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    const io = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
    });
    io.observe(track);

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      io.disconnect();
    };
  }, [applyWrap, direction, images]);

  const doubled = [...images, ...images];

  return (
    <div className="relative w-full min-w-0 overflow-hidden touch-pan-y">
      <button
        type="button"
        onClick={() => nudge("prev")}
        aria-label="Ver diseños anteriores"
        className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-luxury-gold/30 bg-luxury-black/80 text-luxury-gold backdrop-blur-sm transition-all hover:border-luxury-gold/60 hover:bg-luxury-gold/10"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => nudge("next")}
        aria-label="Ver más diseños"
        className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-luxury-gold/30 bg-luxury-black/80 text-luxury-gold backdrop-blur-sm transition-all hover:border-luxury-gold/60 hover:bg-luxury-gold/10"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="relative overflow-hidden touch-pan-y">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-luxury-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-luxury-black to-transparent" />

        <div
          ref={trackRef}
          className="pointer-events-none flex w-max select-none gap-3 will-change-transform"
        >
          {doubled.map((id, i) => (
            <div
              key={`${id}-${i}`}
              className="relative h-52 w-[130px] shrink-0 overflow-hidden rounded-lg"
            >
              <ArtImage
                src={`${imageBasePath}/${id}.webp`}
                alt={`Diseño premium Deluxe ${id}`}
                fill
                sizes="130px"
                className="pointer-events-none object-cover select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
