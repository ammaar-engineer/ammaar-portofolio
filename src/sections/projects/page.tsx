"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import ProjectCard from "./components/project-card";
import { projects } from "./components/data";

export default function Projects() {
  const developmentProjects = projects.filter((p) => p.category === "development");
  const productionProjects = projects.filter((p) => p.category === "production");

  return (
    <section className="w-full px-4 py-20">
      <div className="container mx-auto max-w-6xl space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl font-bold tracking-tight md:text-2xl"
        >
          Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
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
                {developmentProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    githubUrl={project.githubUrl}
                    websiteUrl={project.websiteUrl}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="production" className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {productionProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    githubUrl={project.githubUrl}
                    websiteUrl={project.websiteUrl}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
