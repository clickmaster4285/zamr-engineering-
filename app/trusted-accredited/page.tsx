// app/trusted-accredited/page.tsx
import TrustedAccreditedHero from "@/components/trusted-accredited/Hero";
import IndustryCertifications from "@/components/trusted-accredited/IndustryCertifications";
import Journey from "@/components/trusted-accredited/Journey";
import CTASection from "@/components/trusted-accredited/CTASection";
import Contacts from "@/components/Contacts";
export default function Page() {
  return (
    <main className="flex w-full flex-col items-center">
      <TrustedAccreditedHero />
      <IndustryCertifications />
      <Journey />
      <Contacts />
      <CTASection />
    </main>
  );
}
