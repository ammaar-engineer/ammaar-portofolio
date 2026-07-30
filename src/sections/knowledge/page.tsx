"use client"
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import { wikiItems } from "./components/data";
import Stack from "./components/stack";
import WikiCard from "./components/wiki-card";

export default function Knowledge() {
  return (
    <section className="w-full px-4 py-20">
      <div className="container mx-auto max-w-6xl space-y-16">
        <Stack />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Separator />
        </motion.div>

        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xl font-bold tracking-tight md:text-2xl"
          >
            Knowledge Base
          </motion.h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {wikiItems.map((wiki, index) => (
              <WikiCard
                key={wiki.id}
                title={wiki.title}
                description={wiki.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
