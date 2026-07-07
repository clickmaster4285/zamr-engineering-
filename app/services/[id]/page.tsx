"use client";

import { useParams } from "next/navigation";
import { getServiceBySlug } from "@/mockData/services";
import ProjectHero from "@/components/projects/ProjectHero";
import Overview from "@/components/projects/Overview";
import Capabilities from "@/components/projects/Capabilities";
import Process from "@/components/projects/Process";
import Deliverables from "@/components/projects/Deliverables";
import RelatedWork from "@/components/projects/RelatedWork";
import Contact from "@/components/services/Contact";

export default function ServiceDetailPage() {
  const params = useParams();
  const service = getServiceBySlug(params.id as string);

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-500">Service not found.</p>
      </main>
    );
  }

  return (
    <main className="w-full flex flex-col items-center">
      <ProjectHero title={service.heroTitle} subtitle={service.heroSubtitle} />
      <Overview
        number={service.overviewNumber}
        heading={service.overviewHeading}
        paragraphs={service.overviewParagraphs}
        serviceDetails={service.serviceDetails}
      />
      <Capabilities
        number={service.capabilitiesNumber}
        heading={service.capabilitiesHeading}
        capabilities={service.capabilities}
      />
      <Process
        number={service.processNumber}
        heading={service.processHeading}
        processSteps={service.processSteps}
      />
      <Deliverables
        number={service.deliverablesNumber}
        heading={service.deliverablesHeading}
        subtext={service.deliverablesSubtext}
        deliverables={service.deliverables}
      />
      <RelatedWork
        number={service.relatedNumber}
        heading={service.relatedHeading}
        projects={service.relatedProjects}
      />
      <Contact />
    </main>
  );
}
