// app/about/page.tsx
import AboutHero from "@/components/About/Hero";
import Navbar  from "@/components/landing/NavigationBar";
import About  from "@/components/About/About";
import Stat  from "@/components/About/Stat";
import Structure  from "@/components/About/Structure";
import Performance  from "@/components/About/Performance";
import Footer  from "@/components/About/Footer";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center">
      <Navbar />
      <AboutHero />
      <About />
      <Stat />
      <Structure />
      <Performance />
      <Footer />
    </main>
  );
}