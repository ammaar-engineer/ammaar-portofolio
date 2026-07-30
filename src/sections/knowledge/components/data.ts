import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Wiki } from "@/types";

const techStack = [
  "NodeJS",
  "React",
  "NextJS",
  "ExpressJS",
  "NestJS",
  "Tailwind",
  "MariaDB",
  "Redis",
];

const wikiItems: Wiki[] = [
  {
    id: "1",
    title: "REST API Best Practices",
    description: "Guidelines for building scalable REST APIs with proper HTTP methods and status codes.",
  },
  {
    id: "2",
    title: "Database Indexing",
    description: "Understanding database indexing strategies for query optimization and performance.",
  },
  {
    id: "3",
    title: "Authentication Patterns",
    description: "Comprehensive guide to JWT, session-based, and OAuth authentication methods.",
  },
  {
    id: "4",
    title: "Caching Strategies",
    description: "Redis caching patterns and techniques for high-performance applications.",
  },
];

export { techStack, wikiItems };
