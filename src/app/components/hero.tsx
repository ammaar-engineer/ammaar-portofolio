import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-20">
      <div className="flex max-w-4xl flex-col items-center gap-8 text-center">
        {/* Name */}
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            M.Ammaar Fauzaan
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
          A passionate developer crafting elegant solutions to complex problems.
          Specializing in web development, design systems, and user experiences.
        </p>

        {/* Social Media Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              GitHub
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
