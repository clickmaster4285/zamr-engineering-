import ServicesHero from "@/components/services/Hero";
import Services  from "@/components/landing/Services";


export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <ServicesHero />
       <Services />
      </main>
  );
}