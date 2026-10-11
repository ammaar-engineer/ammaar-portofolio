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
  "MongoDB",
  "Podman",
  "Linux",
  "Git",
  "HonoJS",
  "Linux basic",
];

const wikiItems: Wiki[] = [
  {
    id: "1",
    title: "REST API Practices",
    description: "Guidelines for building scalable REST APIs with proper HTTP methods and status codes.",
  },
  {
    id: "2",
    title: "Rate limiting",
    description: "Strategies for throttling requests to protect APIs from abuse and ensure fair resource usage.",
  },
  {
    id: "3",
    title: "Authentication Patterns",
    description: "Comprehensive guide to JWT, session-based, and OAuth authentication methods.",
  },
  {
    id: "4",
    title: "Agent workflow for coding",
    description: "Best practices for orchestrating AI coding agents to plan, implement, and review changes effectively.",
  },
];

export { techStack, wikiItems };
