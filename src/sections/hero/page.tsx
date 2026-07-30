"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleContactClick = () => {
    const profileSection = document.querySelector("#profile");
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-20">
      <div className="flex max-w-7xl flex-col items-center gap-8 text-center">
        {/* Name with Gradient */}
        <h1 className="text-6xl font-bold leading-tight tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="gradient-name">
            Mochammad Ammmaar Fauzaan
          </span>
        </h1>

        {/* Role Badge */}
        <Badge className="rounded-[2px] bg-black text-white text-sm px-4 py-4 font-medium hover:bg-black/90 shadow-sm">
          Backend Developer
        </Badge>

        {/* Contact Button */}
        <Button
          size="lg"
          className="mt-4 rounded-none"
          onClick={handleContactClick}
        >
          Contact Me
        </Button>
      </div>
    </section>
  );
}
