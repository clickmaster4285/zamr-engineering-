import Image from "next/image";

interface Props {
  number: string;
  heading: string;
  images: string[];
}

export default function Gallery({ number, heading, images }: Props) {
  const galleryImages = images.slice(0, 4);

  return (
    <section className="w-full bg-[var(--bg-section)] px-5 py-14 sm:px-8 md:px-10 md:py-16 xl:px-[130px] xl:py-[130px]">
      <div className="mx-auto flex w-full max-w-[1468px] flex-col gap-10 md:gap-12 xl:gap-[60px]">
        <div className="flex flex-col gap-6 xl:gap-[30px]">
          <div className="flex flex-row items-center gap-4">
            <span className="text-sm font-medium tracking-[3px] text-[var(--color-primary)] md:text-base">
              {number}
            </span>
            <span className="h-px w-16 bg-[var(--text-dark)] md:w-[104px]" />
            <span className="text-sm font-medium tracking-[3px] uppercase text-[var(--text-dark)] md:text-base">
              GALLERY
            </span>
          </div>

          <h2 className="text-[32px] font-bold leading-[40px] text-[var(--text-dark)] sm:text-[40px] sm:leading-[50px] md:text-[48px] md:leading-[58px] xl:text-[56px] xl:leading-[71px]">
            {heading}
          </h2>
        </div>

        {galleryImages.length > 0 && (
          <div className="flex flex-col gap-3">
            {galleryImages[0] && (
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="relative h-[220px] w-full overflow-hidden bg-[var(--text-heading)] sm:h-[280px] md:h-[320px] md:flex-[2] xl:h-[400px]">
                  <Image
                    src={galleryImages[0]}
                    alt="Gallery image 1"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 66vw, 100vw"
                  />
                </div>
                {galleryImages[1] && (
                  <div className="relative h-[220px] w-full overflow-hidden bg-[var(--text-heading)] sm:h-[280px] md:h-[320px] md:flex-[1] xl:h-[400px]">
                    <Image
                      src={galleryImages[1]}
                      alt="Gallery image 2"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 34vw, 100vw"
                    />
                  </div>
                )}
              </div>
            )}

            {galleryImages[2] && (
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="relative h-[200px] w-full overflow-hidden bg-[var(--text-heading)] sm:h-[240px] md:h-[260px] md:flex-[1] xl:h-[320px]">
                  <Image
                    src={galleryImages[2]}
                    alt="Gallery image 3"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 34vw, 100vw"
                  />
                </div>
                {galleryImages[3] && (
                  <div className="relative h-[200px] w-full overflow-hidden bg-[var(--text-heading)] sm:h-[240px] md:h-[260px] md:flex-[2] xl:h-[320px]">
                    <Image
                      src={galleryImages[3]}
                      alt="Gallery image 4"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 66vw, 100vw"
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
