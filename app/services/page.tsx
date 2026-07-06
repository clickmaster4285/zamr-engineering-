import ServicesHero from "@/components/services/Hero";
import Navbar  from "@/components/landing/NavigationBar";
import Services  from "@/components/landing/Services";
import WhyZamr from "@/components/services/WhyZamar";
import Contact from "@/components/services/Contact";
import Footer  from "@/components/About/Footer";


export default function Page() {
  return (
    <main className="w-full flex flex-col items-center">
        <Navbar />
      <ServicesHero />
      <Services />
      <WhyZamr />
      <Contact />
      <Footer />
    </main>
  );
}