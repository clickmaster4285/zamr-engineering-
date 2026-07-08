import Image from "next/image";

interface Props {
  number: string;
  heading: string;
  images: string[];
}

export default function Gallery({ number, heading, images }: Props) {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-blue-accent)]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-[var(--text-dark)]" />
            <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
              GALLERY
            </span>
          </div>

          <h2 className="text-[44px] font-bold leading-[55px] text-[var(--text-heading)]">
            {heading}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`relative w-full ${i === 0 ? "h-[400px] sm:h-[540px]" : "h-[260px]"}`}>
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
