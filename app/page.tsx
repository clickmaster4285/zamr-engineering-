// app/page.tsx
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Projects from "@/components/landing/Projects";
import WhyZamr from "@/components/landing/WhyZamr";
import Contacts from "@/components/landing/Contacts";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyZamr />
      <Contacts />
    </main>
  );
}
