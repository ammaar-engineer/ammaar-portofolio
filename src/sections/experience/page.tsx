"use client";

import { motion } from "motion/react";

export default function Experience() {
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
          Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex min-h-[200px] items-center justify-center rounded-none border border-dashed border-border"
        >
          <p className="text-base text-muted-foreground">No experience yet</p>
        </motion.div>
      </div>
    </section>
  );
}
