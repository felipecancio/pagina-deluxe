import { GALLERY_IMAGES } from "@/lib/constants";
import { ArtImage } from "./ArtImage";

export function HeroArtGrid() {
  const desktopImages = GALLERY_IMAGES.slice(0, 10);

  return (
    <div className="mt-12 hidden lg:grid lg:grid-cols-5 lg:gap-3">
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
