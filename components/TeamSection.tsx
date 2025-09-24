"use client";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type TeamMember = {
  name: string;
  role: string;
  responsibility: string;
  avatarUrl?: string;
};

const TEAM: TeamMember[] = [
  { name: "Aarav Sharma", role: "Founder & CEO", responsibility: "Vision, strategy, and partnerships", avatarUrl: "/window.svg" },
  { name: "Prisha Karki", role: "CTO", responsibility: "Technology, architecture, and delivery", avatarUrl: "/globe.svg" },
  { name: "Rahul Thapa", role: "Lead Designer", responsibility: "Product design and user experience", avatarUrl: "/file.svg" },
  { name: "Sneha Gurung", role: "Project Manager", responsibility: "Timelines, sprints, and client success", avatarUrl: "/next.svg" },
];

export default function TeamSection() {
  return (
    <section id="team" className="w-full flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 pb-16" aria-labelledby="team-heading">
      <h2 id="team-heading" className="text-2xl sm:text-3xl font-bold text-center text-zinc-900 mb-8">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {TEAM.map((m, i) => (
          <AnimatedSection key={m.name} animation="fade-in" delay={i * 100}>
            <Card className="h-full">
              <CardHeader className="flex items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-zinc-200">
                  <Image src={m.avatarUrl || "/vercel.svg"} alt={`${m.name} avatar`} width={80} height={80} />
                </div>
                <CardTitle className="text-base text-zinc-900">{m.name}</CardTitle>
                <CardDescription className="text-xs text-zinc-900">{m.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-900 text-center leading-relaxed">{m.responsibility}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
      <p className="mt-6 text-xs text-zinc-900 text-center max-w-2xl">To update team details, edit the `TEAM` array in `components/TeamSection.tsx` with real names, roles, and responsibilities.</p>
    </section>
  );
}
