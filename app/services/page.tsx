import ServicesHero from "@/components/services/Hero";
import Capabilities  from "@/components/services/Capabilities";
import WhyZamr from "@/components/services/WhyZamar";
import Contact from "@/components/services/Contact";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center">
      <ServicesHero />
      <Capabilities />
      <WhyZamr />
      <Contact />
    </main>
  );
}