import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";

export default function ProjectCard({ title, description, githubUrl }: Omit<Project, "id" | "category">) {
  return (
    <Card className="rounded-none shadow-sm">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
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
  );
}
