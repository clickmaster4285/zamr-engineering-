"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectImage from "@/components/projects/ProjectImage";

interface Props {
  number: string;
  heading: string;
  images: string[];
}

export default function Gallery({ number, heading, images }: Props) {
  const galleryImages = images.filter((src) => src.trim() !== "");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPortrait, setIsPortrait] = useState(false);

  const count = galleryImages.length;
  const safeIndex = count > 0 ? Math.min(activeIndex, count - 1) : 0;
  const activeSrc = galleryImages[safeIndex];

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  useEffect(() => {
    setIsPortrait(false);
  }, [activeSrc]);

  const goPrev = () => {
    if (count <= 1) return;
    setActiveIndex((i) => (i - 1 + count) % count);
  };

  const goNext = () => {
    if (count <= 1) return;
    setActiveIndex((i) => (i + 1) % count);
  };

  const handleMainLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      setIsPortrait(img.naturalHeight > img.naturalWidth);
    },
    [],
  );

  return (
    <section className="w-full bg-[var(--bg-section)] px-5 py-5 lg:px-[77px] lg:py-[77px] 2xl:px-[130px] 2xl:py-[130px]">
      <div className="mx-auto flex w-full max-w-[1468px] flex-col gap-8 lg:gap-9 2xl:gap-[60px]">
        <div className="flex flex-col gap-4 2xl:gap-[30px]">
          <div className="flex flex-row items-center gap-3 lg:gap-[9px] 2xl:gap-4">
            <span className="text-[14px] font-medium leading-[18px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              {number}
            </span>
            <span className="h-px w-10 bg-[var(--color-primary)] lg:w-[104px] lg:bg-[var(--text-dark)]" />
            <span className="text-[13px] font-semibold uppercase leading-4 text-[var(--text-dark)] lg:font-medium lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
              GALLERY
            </span>
          </div>

          <h2 className="text-[28px] font-semibold leading-[35px] text-[var(--text-dark)] lg:text-[26px] lg:font-bold lg:leading-[33px] 2xl:text-[44px] 2xl:leading-[55px]">
            {heading}
          </h2>
        </div>

        {count > 0 && (
          <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <ProjectImage
                key={activeSrc}
                src={activeSrc}
                alt={`Gallery image ${safeIndex + 1}`}
                fill
                className={`object-center ${isPortrait ? "object-contain" : "object-cover"}`}
                sizes="(min-width: 1536px) 1468px, (min-width: 1024px) 90vw, 100vw"
                onLoad={handleMainLoad}
                priority={safeIndex === 0}
              />

              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--bg-light)] text-[var(--text-dark)] shadow-sm transition-opacity hover:opacity-90 lg:left-4 lg:h-12 lg:w-12 2xl:h-14 2xl:w-14"
                  >
                    <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-sm transition-opacity hover:opacity-90 lg:right-4 lg:h-12 lg:w-12 2xl:h-14 2xl:w-14"
                  >
                    <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" strokeWidth={1.5} />
                  </button>
                </>
              )}
            </div>

            <div className="flex w-full gap-2 overflow-x-auto lg:gap-[7px] 2xl:gap-3">
              {galleryImages.map((src, index) => {
                const isActive = index === safeIndex;
                return (
                  <button
                    key={`${src}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View gallery image ${index + 1}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative aspect-[16/9] min-w-[72px] flex-1 overflow-hidden bg-[var(--text-heading)] transition-opacity lg:min-w-0 ${
                      isActive
                        ? "ring-2 ring-[var(--color-primary)] ring-offset-1 ring-offset-[var(--bg-section)]"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <ProjectImage
                      src={src}
                      alt={`Gallery thumbnail ${index + 1}`}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1536px) 180px, (min-width: 1024px) 12vw, 72px"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
