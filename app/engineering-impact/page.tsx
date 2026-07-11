// app/engineering-impact/page.tsx
import ImpactHero from "@/components/engineering-impact/Hero";
import ImpactAreas from "@/components/engineering-impact/ImpactAreas";
import AreasOfImpact from "@/components/engineering-impact/AreasOfImpact";
import WhyItMatters from "@/components/engineering-impact/WhyItMatters";
import OurApproach from "@/components/engineering-impact/OurApproach";
import OurImpact from "@/components/engineering-impact/OurImpact";
import FeaturedProjects from "@/components/engineering-impact/FeaturedProjects";
import TrackRecord from "@/components/engineering-impact/TrackRecord";
import CTASection from "@/components/engineering-impact/CTASection";

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center">
      <ImpactHero />
      <ImpactAreas />
      <AreasOfImpact />
      <WhyItMatters />
      <OurApproach />
      <OurImpact />
      <FeaturedProjects />
      <TrackRecord />
      <CTASection />
    </main>
  );
}
