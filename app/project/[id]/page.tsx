"use client";

import { useParams } from "next/navigation";
import { getProjectBySlug } from "@/mockData/projects";
import ProjectHero from "@/components/services/detail/ProjectHero";
import Challenge from "@/components/projects/detail/Challenge";
import Approach from "@/components/projects/detail/Approach";
import Results from "@/components/projects/detail/Results";
import Gallery from "@/components/projects/detail/Gallery";
import RelatedWork from "@/components/services/detail/RelatedWork";
import Contact from "@/components/services/Contact";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = getProjectBySlug(params.id as string);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-500">Project not found.</p>
      </main>
    );
  }

  return (
    <main className="w-full flex flex-col items-center">
      <ProjectHero
        image={project.heroImage}
        title={project.heroTitle}
        subtitle={project.shortDescription}
        stats={project.stats}
      />

      <Challenge
        number={project.aboutNumber}
        heading={project.aboutHeading}
        description={project.aboutDescription}
        location={project.location}
        paragraphs={project.challengeParagraphs}
      />

      <Approach
        number={project.approachNumber}
        heading={project.approachHeading}
        steps={project.approachSteps}
      />

      <Results
        number={project.resultsNumber}
        heading={project.resultsHeading}
        metrics={project.resultsMetrics}
        achievements={project.achievements}
      />

      <Gallery
        number={project.galleryNumber}
        heading={project.galleryHeading}
        images={project.galleryImages}
      />

      <RelatedWork
        number={project.relatedNumber}
        heading={project.relatedHeading}
        projects={project.relatedProjects.map((p) => ({
          title: p.title,
          image: p.image,
        }))}
      />

      <Contact number="06" serviceTitle={project.title} />
    </main>
  );
}
