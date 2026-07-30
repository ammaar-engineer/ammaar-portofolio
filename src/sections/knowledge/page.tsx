import { Separator } from "@/components/ui/separator";
import Stack from "./components/stack";
import WikiCard from "./components/wiki-card";
import { wikiItems } from "./components/data";

export default function Knowledge() {
  return (
    <section className="w-full px-4 py-20">
      <div className="container mx-auto max-w-6xl space-y-16">
        <Stack />

        <Separator />

        <div className="space-y-6">
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">Knowledge Base</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {wikiItems.map((wiki) => (
              <WikiCard key={wiki.id} title={wiki.title} description={wiki.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
