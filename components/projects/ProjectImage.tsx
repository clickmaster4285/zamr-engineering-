"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

export const PROJECT_IMAGE_FALLBACK = "/images/team/noimage.png";

type Props = Omit<ImageProps, "src" | "onError"> & {
  src?: string | null;
};

function resolveSrc(src?: string | null) {
  return src && src.trim() !== "" ? src : PROJECT_IMAGE_FALLBACK;
}

export default function ProjectImage({ src, alt, ...props }: Props) {
  const [currentSrc, setCurrentSrc] = useState(() => resolveSrc(src));

  useEffect(() => {
    setCurrentSrc(resolveSrc(src));
  }, [src]);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== PROJECT_IMAGE_FALLBACK) {
          setCurrentSrc(PROJECT_IMAGE_FALLBACK);
        }
      }}
    />
  );
}
