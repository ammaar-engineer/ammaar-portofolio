"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";

const projects: Project[] = [
  // Development
  {
    id: "1",
    title: "E-Commerce API",
    description: "RESTful API for e-commerce platform with payment integration and order management.",
    githubUrl: "https://github.com/ammaar-engineer/ecommerce-api",
    category: "development",
  },
  {
    id: "2",
    title: "Authentication Service",
    description: "Microservice for user authentication with JWT and refresh tokens.",
    githubUrl: "https://github.com/ammaar-engineer/auth-service",
    category: "development",
  },
  {
    id: "3",
    title: "Task Management System",
    description: "Backend system for task tracking with real-time updates using WebSocket.",
    githubUrl: "https://github.com/ammaar-engineer/task-system",
    category: "development",
  },
  // Production
  {
    id: "4",
    title: "Company Landing Page",
    description: "High-performance landing page with SSR and SEO optimization.",
    githubUrl: "https://github.com/ammaar-engineer/company-landing",
    category: "production",
  },
  {
    id: "5",
    title: "Blog Platform",
    description: "Full-stack blog platform with CMS and markdown support.",
    githubUrl: "https://github.com/ammaar-engineer/blog-platform",
    category: "production",
  },
  {
    id: "6",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard for monitoring application metrics.",
    githubUrl: "https://github.com/ammaar-engineer/analytics-dashboard",
    category: "production",
  },
];

export default function Projects() {
  const developmentProjects = projects.filter((p) => p.category === "development");
  const productionProjects = projects.filter((p) => p.category === "production");

  return (
    <section className="w-full px-4 py-20">
      <div className="container mx-auto max-w-6xl space-y-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Projects</h2>

        <Tabs defaultValue="development" className="w-full">
          <TabsList className="rounded-none">
            <TabsTrigger value="development" className="rounded-none">
              Development
            </TabsTrigger>
            <TabsTrigger value="production" className="rounded-none">
              Production
            </TabsTrigger>
          </TabsList>

          <TabsContent value="development" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {developmentProjects.map((project) => (
                <Card key={project.id} className="rounded-none shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-base">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full gap-1.5"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="size-3" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="production" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {productionProjects.map((project) => (
                <Card key={project.id} className="rounded-none shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-base">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full gap-1.5"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="size-3" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
