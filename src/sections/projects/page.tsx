"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./components/project-card";
import { projects } from "./components/data";

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
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  githubUrl={project.githubUrl}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="production" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {productionProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  githubUrl={project.githubUrl}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
