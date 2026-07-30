import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import type { Wiki } from "@/types";

export default function WikiCard({ title, description, index = 0 }: Omit<Wiki, "id"> & { index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Card className="rounded-none shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription className="text-[10px]">{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
