import Image, { ImageProps } from "next/image";
import { getDictionary, type Locale } from "@/lib/i18n";

interface ArtImageProps extends Omit<ImageProps, "src" | "alt" | "id"> {
  imageId?: number;
  src?: string;
  alt?: string;
  locale?: Locale;
}

export function ArtImage({
  imageId,
  src,
  alt,
  locale = "es",
  className = "",
  priority,
  loading,
  fill,
  ...props
}: ArtImageProps) {
  const imageSrc = src ?? `/images/${imageId}.webp`;
  const imageAlt = alt ?? `${getDictionary(locale).artAlt} ${imageId ?? ""}`;

  const fillClasses = fill
    ? "absolute inset-0 h-full w-full"
    : "";

  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      fill={fill}
      className={`object-cover ${fillClasses} ${className}`}
      priority={priority}
      loading={priority ? undefined : loading}
      quality={75}
      {...props}
    />
  );
}

export function MockupImage({
  className = "",
  priority = false,
  ...props
}: Omit<ImageProps, "src" | "alt">) {
  return (
    <Image
      src="/images/mockup.webp"
      alt="Mega Pack Deluxe — Criativarts"
      className={`bg-transparent object-contain ${className}`}
      priority={priority}
      quality={75}
      {...props}
    />
  );
}
