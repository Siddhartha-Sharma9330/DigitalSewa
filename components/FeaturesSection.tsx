"use client";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FEATURES: { title: string; description: string; points: string[]; badges: string[] }[] = [
  {
    title: "End-to-End Delivery",
    description: "From discovery to deployment, we manage the full lifecycle and deliver on time.",
    points: ["Discovery & Requirements", "Architecture & Development", "Testing & QA", "Deployment & Handover"],
    badges: ["Agile", "CI/CD", "Scrum", "QA"],
  },
  {
    title: "Modern Tech Stack",
    description: "We use a reliable, scalable, and secure stack for modern digital products.",
    points: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4"],
    badges: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    title: "Performance & SEO",
    description: "Optimized performance, accessibility, and SEO best practices out of the box.",
    points: ["Lighthouse 90+", "A11y Friendly", "Structured Data", "Best Practices"],
    badges: ["Lighthouse", "A11y", "SEO", "Core Web Vitals"],
  },
  {
    title: "Secure & Maintainable",
    description: "Standards, code reviews, and automated checks keep your product stable and secure.",
    points: ["OWASP-Aligned", "Code Reviews", "Type Safety", "Automated Tests"],
    badges: ["OWASP", "Type Safe", "Tests", "Reviews"],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 pb-16" aria-labelledby="features-heading">
      <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold text-center text-zinc-900 mb-8">Platform Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {FEATURES.map((f, i) => (
          <AnimatedSection key={f.title} animation="slide-up" delay={i * 100}>
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg focus-within:shadow-lg">
              <CardHeader>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription className="text-zinc-900">{f.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-4 list-disc list-inside text-zinc-900 space-y-1">
                  {f.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="flex gap-2 flex-wrap">
                  {f.badges.map((b) => (
                    <Badge key={b}>{b}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
