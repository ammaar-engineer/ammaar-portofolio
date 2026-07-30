import { Badge } from "@/components/ui/badge";
import { techStack } from "./data";

export default function Stack() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold tracking-tight md:text-2xl">Tech Stack</h2>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="rounded-none px-4 py-4 text-[10px] font-medium"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
