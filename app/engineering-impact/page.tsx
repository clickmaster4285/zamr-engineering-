// app/engineering-impact/page.tsx
import ImpactHero from "@/components/engineering-impact/Hero";
import AreasOfImpact from "@/components/engineering-impact/AreasOfImpact";
import CTASection from "@/components/engineering-impact/CTASection";

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center">
      <ImpactHero />
      <AreasOfImpact />
      <CTASection />
    </main>
  );
}
