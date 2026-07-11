// app/our-teams/page.tsx
import OurTeamsHero from "@/components/our-teams/Hero";
import LeadershipTeam from "@/components/our-teams/LeadershipTeam";
import EngineeringTeams from "@/components/our-teams/EngineeringTeams";
import Collaboration from "@/components/our-teams/Collaboration";
import Careers from "@/components/our-teams/Careers";

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center">
      <OurTeamsHero />
      <LeadershipTeam />
      <EngineeringTeams />
      <Collaboration />
      <Careers />
    </main>
  );
}
