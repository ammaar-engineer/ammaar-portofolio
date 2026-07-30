import type { Project } from "@/types";

export const projects: Project[] = [
  // Development
  {
    id: "1",
    title: "RacerFS",
    description: "SaaS project that aims to help setup things via the terminal",
    githubUrl: "https://github.com/ammaar-engineer/ecommerce-api",
    category: "development",
  },
  {
    id: "2",
    title: "Authentication Service",
    description: "Microservice for user authentication with JWT and refresh tokens.",
    githubUrl: "https://github.com/ammaar-engineer/auth-service",
    category: "development",
  },
  {
    id: "3",
    title: "Task Management System",
    description: "Backend system for task tracking with real-time updates using WebSocket.",
    githubUrl: "https://github.com/ammaar-engineer/task-system",
    category: "development",
  },
  // Production
  {
    id: "4",
    title: "Company Landing Page",
    description: "High-performance landing page with SSR and SEO optimization.",
    githubUrl: "https://github.com/ammaar-engineer/company-landing",
    category: "production",
  },
  {
    id: "5",
    title: "Blog Platform",
    description: "Full-stack blog platform with CMS and markdown support.",
    githubUrl: "https://github.com/ammaar-engineer/blog-platform",
    category: "production",
  },
  {
    id: "6",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard for monitoring application metrics.",
    githubUrl: "https://github.com/ammaar-engineer/analytics-dashboard",
    category: "production",
  },
];
