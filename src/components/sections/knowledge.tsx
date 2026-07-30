"use client"
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Wiki } from "@/types";

const techStack = [
  "NodeJS",
  "React",
  "NextJS",
  "ExpressJS",
  "NestJS",
  "Tailwind",
  "MariaDB",
  "Redis",
];

const wikiItems: Wiki[] = [
  {
    id: "1",
    title: "REST API Best Practices",
    description: "Guidelines for building scalable REST APIs with proper HTTP methods and status codes.",
  },
  {
    id: "2",
    title: "Database Indexing",
    description: "Understanding database indexing strategies for query optimization and performance.",
  },
  {
    id: "3",
    title: "Authentication Patterns",
    description: "Comprehensive guide to JWT, session-based, and OAuth authentication methods.",
  },
  {
    id: "4",
    title: "Caching Strategies",
    description: "Redis caching patterns and techniques for high-performance applications.",
  },
];

export default function Knowledge() {
  return (
    <section className="w-full px-4 py-20">
      <div className="container mx-auto max-w-6xl space-y-16">
        {/* Stack Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="rounded-none px-4 py-5 text-sm font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Wiki Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Knowledge Base</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {wikiItems.map((wiki) => (
              <Card key={wiki.id} className="rounded-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">{wiki.title}</CardTitle>
                  <CardDescription>{wiki.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
