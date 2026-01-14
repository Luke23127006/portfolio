export interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  video?: string;
  live?: string;
}

export const projects: ProjectData[] = [
  {
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization platform built with React, D3.js, and WebSocket integration",
    tech: ["React", "TypeScript", "D3.js", "WebSocket"],
    image:
      "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljc3xlbnwxfHx8fDE3Njc4NDk5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Mobile Banking App",
    description:
      "Cross-platform financial management application with biometric authentication",
    tech: ["React Native", "Redux", "Node.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY3ODU5MzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Enterprise CMS",
    description:
      "Headless content management system with multi-tenant support and GraphQL API",
    tech: ["Next.js", "GraphQL", "Prisma", "AWS"],
    image:
      "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njc4NjYxODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    live: "https://example.com",
  },
];
