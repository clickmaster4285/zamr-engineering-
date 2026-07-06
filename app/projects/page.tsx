import ProjectHero from "@/components/projects/ProjectHero";
import Overview from "@/components/projects/Overview";
import Capabilities from "@/components/projects/Capabilities";
import Process from "@/components/projects/Process"
import Deliverables from "@/components/projects/Deliverables"
import RelatedWork from "@/components/projects/RelatedWork";
import Contact from "@/components/services/Contact";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center">
      <ProjectHero />
      <Overview />
      <Capabilities />
      <Process />
      <Deliverables />
      <RelatedWork />
      <Contact />
    </main>
  );
}