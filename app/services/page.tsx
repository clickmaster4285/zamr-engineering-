import ServicesHero from "@/components/services/Hero";
import Capabilities  from "@/components/services/Capabilities";
import WhyZamr from "@/components/services/WhyZamar";
import Methodology from "@/components/services/Methodology";
import Contacts from "@/components/Contacts";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center">
      <ServicesHero />
      <Capabilities />
      <WhyZamr />
      <Methodology />
      <Contacts />
    </main>
  );
}