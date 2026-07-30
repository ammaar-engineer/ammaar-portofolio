import { Badge } from "@/components/ui/badge";
import { motion } from 'motion/react';
import { techStack } from "./data";

export default function Stack() {
  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xl font-bold tracking-tight md:text-2xl"
      >
        Tech Stack
      </motion.h2>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
          >
            <Badge
              variant="outline"
              className="rounded-none px-4 py-4 text-[10px] font-medium bg-white shadow-md hover:bg-black hover:text-white"
            >
              {tech}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
