"use client";

import { useParams } from "next/navigation";
import { getServiceBySlug } from "@/mockData/services";
import ServicesHero from "@/components/services/detail/ServicesHero";
import Capabilities from "@/components/services/detail/Capabilities";
import ReferProjects from "@/components/services/detail/ReferProjects";
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
      <ServicesHero title={service.title} subtitle={service.description} />
      <Capabilities
        number="01"
        heading="Technical Excellence & Delivery Focus"
        capabilities={service.capabilities}
      />
      <ReferProjects />
      <Contact number="03" serviceTitle={service.capabilities[0].title} />
    </main>
  );
}
