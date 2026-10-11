"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from 'motion/react';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.24-.02-2.25-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  );
}

export default function Hero() {
  const handleContactClick = () => {
    const profileSection = document.querySelector("#profile");
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden px-4 py-20">
      <div className="flex w-full max-w-7xl flex-col items-center gap-8 text-center">
        {/* Name with Gradient */}
        <h1 className="text-xl font-bold leading-tight tracking-tight break-words sm:text-3xl md:text-4xl lg:text-5xl">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeIn' }}
            className="gradient-name inline-block"
          >
            MOCHAMMAD AMMAAR FAUZAAN
          </motion.span>
        </h1>

        {/* Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <Badge className="h-auto whitespace-normal rounded-[2px] bg-black px-4 py-2.5 text-center text-xs leading-relaxed font-medium text-white shadow-md hover:bg-black/90 sm:px-6 sm:py-3 sm:text-sm">
            WEB DEVELOPER & IT ENTHUSASTIC
          </Badge>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="mt-4 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            size="lg"
            className="rounded-none"
            onClick={handleContactClick}
          >
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-none"
            asChild
          >
            <a
              href="https://github.com/ammaar-engineer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
