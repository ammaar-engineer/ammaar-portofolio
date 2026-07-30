import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import type { Project } from "@/types";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ title, description, githubUrl, index = 0 }: Omit<Project, "id" | "category"> & { index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Card className="rounded-none shadow-sm hover:shadow-md transition-shadow h-full">
        <CardHeader className="flex flex-col flex-1">
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription className="text-[10px]">
            <span className="line-clamp-3">
              {description}
            </span>
          </CardDescription>
          <div className="pt-2">
            <Button variant="outline" size="sm" className="rounded-full gap-1.5" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-3" />
                GitHub
              </a>
            </Button>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
