import Image from "next/image";

interface Props {
  number: string;
  heading: string;
  images: string[];
}

export default function Gallery({ number, heading, images }: Props) {
  // Use up to 4 images for the Figma layout
  const galleryImages = images.slice(0, 4);

  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 lg:p-[130px]">
      {/* Frame 1321319072 — inner wrapper (gap: 60px) */}
      <div className="flex flex-col gap-10 lg:gap-[60px]">
        {/* Frame 120 — header (gap: 30px) */}
        <div className="flex flex-col gap-6 lg:gap-[30px]">
          {/* Frame 118 — section label */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-base font-medium tracking-[3px] text-[var(--color-blue-accent)]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-base font-medium tracking-[3px] uppercase text-[var(--text-dark)]">
              GALLERY
            </span>
          </div>

          {/* Figma: 56px/700/71px, #333333 */}
          <h2 className="text-[var(--text-dark)] text-[36px] font-bold leading-[44px] sm:text-[44px] sm:leading-[52px] lg:text-[56px] lg:leading-[71px]">
            {heading}
          </h2>
        </div>

        {/* Frame 1321319075 — gallery grid (gap: 12px) */}
        {galleryImages.length > 0 && (
          <div className="flex flex-col gap-3">
            {/* Row 1: Large left (flex-[2]) + Small right (flex-[1]), 400px tall */}
            {galleryImages[0] && galleryImages[1] && (
              <div className="flex flex-col gap-3 lg:flex-row lg:gap-[12px]">
                <div className="relative w-full h-[280px] overflow-hidden bg-[#090D15] lg:h-[400px] lg:flex-[2]">
                  <Image
                    src={galleryImages[0]}
                    alt="Gallery image 1"
                    fill
                    className="object-cover opacity-90"
                  />
                  {/* Gradient overlay at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 flex items-end px-5 py-4 h-[47px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(4,13,32,0.75) 0%, transparent 100%)",
                    }}
                  />
                </div>
                <div className="relative w-full h-[280px] overflow-hidden bg-[#090D15] lg:h-[400px] lg:flex-[1]">
                  <Image
                    src={galleryImages[1]}
                    alt="Gallery image 2"
                    fill
                    className="object-cover opacity-90"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[47px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(4,13,32,0.75) 0%, transparent 100%)",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Row 2: Small left (flex-[1]) + Large right (flex-[2]), 320px tall */}
            {galleryImages[2] && galleryImages[3] && (
              <div className="flex flex-col gap-3 lg:flex-row lg:gap-[12px]">
                <div className="relative w-full h-[240px] overflow-hidden bg-[#090D15] lg:h-[320px] lg:flex-[1]">
                  <Image
                    src={galleryImages[2]}
                    alt="Gallery image 3"
                    fill
                    className="object-cover opacity-90"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 flex items-end px-5 py-4 h-[47px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(4,13,32,0.75) 0%, transparent 100%)",
                    }}
                  />
                </div>
                <div className="relative w-full h-[240px] overflow-hidden bg-[#090D15] lg:h-[320px] lg:flex-[2]">
                  <Image
                    src={galleryImages[3]}
                    alt="Gallery image 4"
                    fill
                    className="object-cover opacity-90"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[47px]"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(4,13,32,0.75) 0%, transparent 100%)",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
