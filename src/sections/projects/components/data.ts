import type { Project } from "@/types";

export const projects: Project[] = [
  // Development
  {
    id: "1",
    title: "RacerFS",
    description: "SaaS project that aims to help setup things via the terminal",
    githubUrl: "https://github.com/ammaar-engineer/RacerFS",
    category: "development",
  },
  {
    id: "2",
    title: "Ev-Express",
    description: "Small absctraction on top of express to boost my workflow",
    githubUrl: "https://github.com/ammaar-engineer/Ev-Express",
    category: "development",
  },
  {
    id: "3",
    title: "RacerSR",
    description: "Connect AI like 9router and Manage them like using obsidian ",
    githubUrl: "https://github.com/ammaar-engineer/RacerSR",
    category: "development",
  },
  {
    "id": "4",
    "title": "AgenticKanban",
    "description": "A kanban board that is based on agentic",
    "githubUrl": "https://github.com/ammaar-engineer/AgenticKanban",
    "category": "development",
  },
  // Production
  {
    id: "5",
    title: "QuantaAPI",
    description: "Create mock API before your backend ready",
    websiteUrl: "https://example.com",
    category: "production",
  },
];
