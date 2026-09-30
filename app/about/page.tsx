// app/about/page.tsx
import AboutHero from "@/components/About/Hero";
import About  from "@/components/About/About";
import Stat  from "@/components/About/Stat";
import KeyDirectors  from "@/components/About/KeyDirectors";
import FounderStory  from "@/components/About/FounderStory";
import AboutVideo  from "@/components/About/AboutVideo";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center">
      <AboutHero />
      <About />
      <Stat />
      <KeyDirectors />
      <FounderStory />
      <AboutVideo />
    </main>
  );
}