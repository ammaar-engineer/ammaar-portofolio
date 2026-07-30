import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ title, description, githubUrl }: Omit<Project, "id" | "category">) {
  return (
    <Card className="rounded-none shadow-sm h-full">
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
  );
}
