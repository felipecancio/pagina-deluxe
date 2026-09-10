import Image, { ImageProps } from "next/image";

interface ArtImageProps extends Omit<ImageProps, "src" | "alt" | "id"> {
  imageId?: number;
  src?: string;
  alt?: string;
}

export function ArtImage({
  imageId,
  src,
  alt,
  className = "",
  priority,
  loading,
  fill,
  ...props
}: ArtImageProps) {
  const imageSrc = src ?? `/images/${imageId}.png`;
  const imageAlt = alt ?? `Diseño premium Deluxe ${imageId ?? ""}`;

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
      quality={85}
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
      src="/images/mockup.png"
      alt="Mega Pack Deluxe — Colección Premium Criativarts"
      className={`bg-transparent object-contain ${className}`}
      priority={priority}
      quality={90}
      {...props}
    />
  );
}
