"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from 'motion/react';

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
        <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
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
          <Badge className="rounded-[2px] bg-black text-white text-sm px-4 py-4 font-medium hover:bg-black/90 shadow-md">
            WEB DEVELOPER & IT ENTHUSASTIC
          </Badge>
        </motion.div>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        >
          <Button
            size="lg"
            className="mt-4 rounded-none"
            onClick={handleContactClick}
          >
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
