"use client";

import { useParams } from "next/navigation";
import { getServiceBySlug } from "@/mockData/services";
import ProjectHero from "@/components/services/detail/ProjectHero";
import Overview from "@/components/services/detail/Overview";
import Capabilities from "@/components/services/detail/Capabilities";
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
      <ProjectHero title={service.title} subtitle={service.description} />
      <Overview
        number="01"
        heading={`What is ${service.title}?`}
        description={service.description}
      />
      <Capabilities
        number="02"
        heading="Capabilities"
        capabilities={service.capabilities}
      />
      <Contact number="03" serviceTitle={service.title} />
    </main>
  );
}
