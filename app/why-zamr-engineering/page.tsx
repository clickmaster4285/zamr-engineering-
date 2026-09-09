// app/why-zamr-engineering/page.tsx
import WhyZamrHero from "@/components/why-zamr/Hero";
import HowWeWork from "@/components/why-zamr/HowWeWork";
import Commitment from "@/components/why-zamr/Commitment";
import TrackRecord from "@/components/why-zamr/TrackRecord";
import OurValue from "@/components/why-zamr/OurValue";
import CTASection from "@/components/why-zamr/CTASection";

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center">
      <WhyZamrHero />
      <HowWeWork />
      <Commitment />
      <TrackRecord />
      <OurValue />
      <CTASection />
    </main>
  );
}
