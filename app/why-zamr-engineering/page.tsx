// app/why-zamr-engineering/page.tsx
import WhyZamrHero from "@/components/why-zamr/Hero";
import HowWeWork from "@/components/why-zamr/HowWeWork";
import OurStrengths from "@/components/why-zamr/OurStrengths";
import Commitment from "@/components/why-zamr/Commitment";
import Process from "@/components/why-zamr/Process";
import TrackRecord from "@/components/why-zamr/TrackRecord";
import CTASection from "@/components/why-zamr/CTASection";

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center">
      <WhyZamrHero />
      <HowWeWork />
      <OurStrengths />
      <Commitment />
      <Process />
      <TrackRecord />
      <CTASection />
    </main>
  );
}
