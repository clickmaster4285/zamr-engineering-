// app/trusted-accredited/page.tsx
import TrustedAccreditedHero from "@/components/trusted-accredited/Hero";
import IndustryCertifications from "@/components/trusted-accredited/IndustryCertifications";
import Journey from "@/components/trusted-accredited/Journey";
import TrustedContact from "@/components/trusted-accredited/Contact";
import CTASection from "@/components/trusted-accredited/CTASection";

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center">
      <TrustedAccreditedHero />
      <IndustryCertifications />
      <Journey />
      <TrustedContact />
      <CTASection />
    </main>
  );
}
