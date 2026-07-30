import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Wiki } from "@/types";

export default function WikiCard({ title, description }: Omit<Wiki, "id">) {
  return (
    <Card className="rounded-none shadow-sm">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="text-[10px]">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
