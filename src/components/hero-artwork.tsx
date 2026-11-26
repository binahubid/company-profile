import { getImageProps } from "next/image";

type HeroArtworkName = "needs" | "competencies" | "program" | "brand";

const sizes = "(max-width: 415px) 72vw, (max-width: 767px) 295px, (max-width: 1023px) 180px, (max-width: 1399px) 250px, 320px";

export function HeroArtwork({
  name,
  priority,
  className,
}: {
  name: HeroArtworkName;
  priority: boolean;
  className?: string;
}) {
  const src = `/media/site/hero-${name}.webp`;
  const srcSet = name === "brand"
    ? undefined
    : `/media/site/hero-${name}-480.webp 480w, ${src} 620w`;
  const { props } = getImageProps({
    src,
    alt: "",
    fill: true,
    loading: priority ? "eager" : "lazy",
    fetchPriority: priority ? "high" : "low",
    className,
    draggable: false,
  });

  // Both carousel layouts share size hints so the browser fetches one variant.
  return (
    <picture>
      <img {...props} alt="" srcSet={srcSet} sizes={srcSet ? sizes : undefined} />
    </picture>
  );
}
