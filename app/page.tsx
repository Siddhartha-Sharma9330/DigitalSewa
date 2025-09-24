"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Skeleton } from "@/components/ui/skeleton";
import FeaturesSection from "@/components/FeaturesSection";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <main id="content" className="font-sans min-h-screen w-full bg-gradient-to-br from-zinc-50 via-white to-zinc-100 flex flex-col items-center" aria-label="Digital Sewa main content">
      {/* Hero Section */}
      <AnimatedSection animation="fade-in" delay={0}>
        <section className="w-full flex flex-col items-center justify-center py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-r from-blue-100 via-white to-zinc-100" aria-labelledby="hero-heading">
          <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-zinc-900 mb-6 leading-tight">
            Transform Your Business with Digital Excellence
          </h1>
          <p className="text-lg sm:text-xl text-zinc-900 text-center max-w-2xl mb-8">
            Professional web development, mobile apps, and digital solutions that drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button size="lg" className="px-8 py-4 text-base font-semibold active:scale-95 focus-visible:ring-2 focus-visible:ring-primary transition-transform">Get Started</Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-base font-semibold active:scale-95 focus-visible:ring-2 focus-visible:ring-primary transition-transform">View Our Work</Button>
          </div>
        </section>
      </AnimatedSection>

      {/* Separator */}
      <Separator className="my-8 w-3/4" />

      {/* About Section */}
      <AnimatedSection animation="slide-up" delay={100}>
        <section className="w-full flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 pb-16" aria-labelledby="about-heading">
          <h2 id="about-heading" className="text-2xl sm:text-3xl font-bold text-center text-zinc-900 mb-8">Why Choose Digital Sewa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {[0, 1, 2].map((i) => (
              <AnimatedSection key={i} animation="fade-in" delay={i * 100}>
                {loading ? (
                  <Skeleton className="h-64 w-full" />
                ) : (
                  <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg focus-within:shadow-lg">
                    <CardHeader>
                      <CardTitle>{["Expertise", "Mission", "Technology"][i]}</CardTitle>
                      <CardDescription className="text-zinc-900">
                        {[
                          "Years of experience & technical mastery",
                          "Client success is our priority",
                          "Modern stack for modern business",
                        ][i]}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-zinc-900">
                        {[
                          "Our team brings 10+ years of hands-on experience in web, mobile, and cloud solutions. We deliver robust, scalable, and innovative products tailored to your business needs.",
                          "We are committed to empowering businesses with digital solutions that drive measurable results. Your growth and satisfaction are at the heart of everything we do.",
                          "We leverage the latest technologies to build future-proof solutions. Our stack includes:",
                        ][i]}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {i === 0 && (
                          <><Badge className="motion-safe:animate-bounce">React</Badge><Badge variant="secondary">Next.js</Badge><Badge variant="outline">Node.js</Badge><Badge variant="destructive">TypeScript</Badge></>
                        )}
                        {i === 1 && (
                          <><Badge>Quality</Badge><Badge variant="secondary">Support</Badge><Badge variant="outline">Agility</Badge></>
                        )}
                        {i === 2 && (
                          <><Badge>Tailwind CSS</Badge><Badge variant="secondary">Vercel</Badge><Badge variant="outline">MongoDB</Badge><Badge variant="destructive">API Integration</Badge></>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Services Section */
      }
      <AnimatedSection animation="fade-in" delay={200}>
        <section id="services" className="w-full flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 pb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-2xl sm:text-3xl font-bold text-center text-zinc-900 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            {[0, 1, 2, 3].map((i) => (
              <AnimatedSection key={i} animation="slide-up" delay={i * 100}>
                {loading ? (
                  <Skeleton className="h-64 w-full" />
                ) : (
                  <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg focus-within:shadow-lg">
                    <CardHeader>
                      <CardTitle>{["Web Development", "Mobile App Development", "UI/UX Design", "E-commerce Solutions"][i]}</CardTitle>
                      <CardDescription className="text-zinc-900">
                        {[
                          "Professional web applications and websites",
                          "Native and cross-platform mobile applications",
                          "User-centered design for digital products",
                          "Complete online store development and management",
                        ][i]}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="mb-4 list-disc list-inside text-zinc-900 space-y-1">
                        {[
                          ["Responsive Design", "SEO Optimization", "Performance Optimization", "Custom CMS"],
                          ["iOS & Android", "Cross-platform", "App Store Deployment", "Push Notifications"],
                          ["User Research", "Wireframing", "Prototyping", "Design Systems"],
                          ["Payment Integration", "Inventory Management", "Analytics", "Mobile Commerce"],
                        ][i].map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                      <div className="flex gap-2 flex-wrap mb-4">
                        {i === 0 && (<><Badge>React</Badge><Badge variant="secondary">Next.js</Badge><Badge variant="outline">TypeScript</Badge><Badge variant="destructive">Tailwind CSS</Badge></>)}
                        {i === 1 && (<><Badge>React Native</Badge><Badge variant="secondary">Flutter</Badge><Badge variant="outline">Swift</Badge><Badge variant="destructive">Kotlin</Badge></>)}
                        {i === 2 && (<><Badge>Figma</Badge><Badge variant="secondary">Adobe XD</Badge><Badge variant="outline">Sketch</Badge><Badge variant="destructive">InVision</Badge></>)}
                        {i === 3 && (<><Badge>Shopify</Badge><Badge variant="secondary">WooCommerce</Badge><Badge variant="outline">Stripe</Badge><Badge variant="destructive">PayPal</Badge></>)}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full transition-all duration-300 hover:scale-105 hover:shadow active:scale-95 focus-visible:ring-2 focus-visible:ring-primary">Learn More</Button>
                    </CardFooter>
                  </Card>
                )}
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Features Section */}
      <FeaturesSection />

      {/* Team Section */}
      <TeamSection />
    </main>
  );
}
