"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import type { SocialLinks } from "@/types";

const socialLinks: SocialLinks = {
  github: "https://github.com/ammaar-engineer",
  threads: "https://threads.net/@ammaar_engineer",
};

const socialButtons = [
  {
    href: socialLinks.github,
    label: "GitHub",
    variant: "default" as const,
  },
  {
    href: socialLinks.threads,
    label: "Threads",
    variant: "outline" as const,
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
        <path d="M12.186 3.004c-3.712 0-6.715 3.003-6.715 6.715 0 1.274.357 2.467.977 3.483l-1.487 5.458 5.599-1.455c.977.596 2.126.945 3.361.945 3.712 0 6.715-3.003 6.715-6.715s-3.003-6.715-6.715-6.715zm3.715 9.215c-.146.824-.859 1.538-1.683 1.683-1.274.219-2.636.219-3.91 0-.824-.145-1.537-.859-1.683-1.683-.219-1.274-.219-2.636 0-3.91.146-.824.859-1.538 1.683-1.683 1.274-.219 2.636-.219 3.91 0 .824.145 1.537.859 1.683 1.683.219 1.274.219 2.636 0 3.91z" />
      </svg>
    ),
  },
];

export default function Profile() {
  return (
    <section className="w-full px-4 py-20">
      <div className="container mx-auto max-w-6xl space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl font-bold tracking-tight md:text-2xl"
        >
          My Profile
        </motion.h2>

        <div className="flex flex-wrap gap-4">
          {socialButtons.map((button, index) => (
            <motion.div
              key={button.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <Button
                size="lg"
                variant={button.variant}
                className={button.variant === "outline" ? "rounded-none gap-2 shadow-md hover:shadow-lg transition-shadow" : "rounded-none shadow-md hover:shadow-lg transition-shadow"}
                asChild
              >
                <a href={button.href} target="_blank" rel="noopener noreferrer">
                  {button.icon}
                  {button.label}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
