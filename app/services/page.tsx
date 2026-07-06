import ServicesHero from "@/components/services/Hero";
import Services  from "@/components/landing/Services";
import WhyZamr from "@/components/services/WhyZamar";
import Contact from "@/components/services/Contact";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center">
      <ServicesHero />
      <Services />
      <WhyZamr />
      <Contact />
    </main>
  );
}