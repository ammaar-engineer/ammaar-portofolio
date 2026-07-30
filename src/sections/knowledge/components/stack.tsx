import { Badge } from "@/components/ui/badge";
import { techStack } from "./data";

export default function Stack() {
  return (
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
  );
}
