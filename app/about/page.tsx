// app/about/page.tsx
import AboutHero from "@/components/About/Hero";
import About  from "@/components/About/About";
import Stat  from "@/components/About/Stat";
import Structure  from "@/components/About/Structure";
import Performance  from "@/components/About/Performance";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center">
      <AboutHero />
      <About />
      <Stat />
      <Structure />
      <Performance />
    </main>
  );
}