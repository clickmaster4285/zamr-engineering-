import Image from "next/image";

interface Props {
  number: string;
  heading: string;
  images: string[];
}

export default function Gallery({ number, heading, images }: Props) {
  const galleryImages = images.slice(0, 4);

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

        {galleryImages.length > 0 && (
          <div className="flex flex-col gap-4 lg:gap-[7px] 2xl:gap-3">
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-[7px] 2xl:gap-3">
              {galleryImages[0] && (
                <div className="relative h-[220px] w-full overflow-hidden bg-[var(--text-heading)] lg:h-[237px] lg:flex-1 2xl:h-[400px] 2xl:flex-[2.16]">
                  <Image
                    src={galleryImages[0]}
                    alt="Gallery image 1"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1536px) 68vw, (min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              )}
              {galleryImages[1] && (
                <div className="relative h-[220px] w-full overflow-hidden bg-[var(--text-heading)] lg:h-[237px] lg:flex-1 2xl:h-[400px]">
                  <Image
                    src={galleryImages[1]}
                    alt="Gallery image 2"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1536px) 32vw, (min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              )}
            </div>

            {galleryImages[2] && (
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-[7px] 2xl:gap-3">
                <div className="relative h-[220px] w-full overflow-hidden bg-[var(--text-heading)] lg:h-[190px] lg:flex-1 2xl:h-[320px]">
                  <Image
                    src={galleryImages[2]}
                    alt="Gallery image 3"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1536px) 32vw, (min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                {galleryImages[3] && (
                  <div className="relative h-[220px] w-full overflow-hidden bg-[var(--text-heading)] lg:h-[190px] lg:flex-1 2xl:h-[320px] 2xl:flex-[2.16]">
                    <Image
                      src={galleryImages[3]}
                      alt="Gallery image 4"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1536px) 68vw, (min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
