export type Template = "minimalist" | "creative" | "corporate";

export type ColorTheme = {
  primary: string;
  accent: string;
  background: string;
  text: string;
};

export type PortfolioData = {
  template: Template;
  colorTheme: ColorTheme;
  hero: {
    name: string;
    title: string;
    description: string;
    image?: string;
  };
  about: {
    bio: string;
    image?: string;
  };
  skills: Array<{
    name: string;
    level: number;
    category: string;
  }>;
  projects: Array<{
    id: string;
    title: string;
    description: string;
    image?: string;
    tags: string[];
    link?: string;
    github?: string;
  }>;
  contact: {
    email: string;
    phone?: string;
    location?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  lookingForWork: boolean;
};

export const defaultPortfolioData: PortfolioData = {
  template: "minimalist",
  colorTheme: {
    primary: "#A78BFA",
    accent: "#10B981",
    background: "#FFFFFF",
    text: "#1F2937",
  },
  hero: {
    name: "Jane Developer",
    title: "Full Stack Developer & Designer",
    description: "Crafting beautiful digital experiences with modern web technologies",
  },
  about: {
    bio: "I'm a passionate developer with 5+ years of experience building scalable web applications. I specialize in React, TypeScript, and modern CSS frameworks. When I'm not coding, you'll find me contributing to open source or exploring new technologies.",
  },
  skills: [
    { name: "React", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Tailwind CSS", level: 95, category: "Frontend" },
    { name: "PostgreSQL", level: 80, category: "Backend" },
    { name: "UI/UX Design", level: 85, category: "Design" },
  ],
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "https://example.com",
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
    },
    {
      id: "3",
      title: "Portfolio Builder",
      description: "Create stunning portfolio websites without code",
      tags: ["React", "TypeScript", "Vite"],
      link: "https://example.com",
    },
  ],
  contact: {
    email: "jane@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/janedev",
    github: "https://github.com/janedev",
    twitter: "https://twitter.com/janedev",
  },
  lookingForWork: true,
};
