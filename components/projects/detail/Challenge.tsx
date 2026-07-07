import { MapPin } from "lucide-react";

interface Props {
  number: string;
  heading: string;
  description: string;
  location: string;
  paragraphs: string[];
}

export default function Challenge({
  number,
  heading,
  description,
  location,
  paragraphs,
}: Props) {
  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]">
      <div className="mx-auto max-w-[1468px]">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[#1945A7]">
              {number}
            </span>
            <span className="h-px w-[104px] bg-black" />
            <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[#333333]">
              THE CHALLENGE
            </span>
          </div>

          <h2 className="text-[44px] font-bold leading-[55px] text-[#090D15]">
            {heading}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_436px] lg:gap-[60px]">
          <div className="flex flex-col gap-5">
            <p className="text-[17px] leading-[31px] text-[#344153]">
              {description}
            </p>

            <div className="flex items-center gap-2 rounded bg-[rgba(25,69,167,0.06)] px-4 py-3">
              <MapPin size={16} className="text-[#1945A7]" />
              <span className="text-[13px] font-semibold leading-4 tracking-[0.06em] text-[#1945A7]">
                {location}
              </span>
            </div>

            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[17px] leading-[31px] text-[#697281]"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
