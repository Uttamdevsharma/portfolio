export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  improvements: string[];
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: "planora",
    name: "Planora - Event Management Platform",
    shortDescription: "A full-stack event management platform connecting organizers and participants with secure registration.",
    fullDescription: "Planora is a full-stack event management platform that connects event organizers and participants. It offers event discovery, secure registration, and powerful admin controls.",
    techStack: ["TypeScript", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    liveUrl: "https://planora-client-topaz.vercel.app",
    githubUrl: "https://github.com/Uttamdevsharma/planora_frontend",
    challenges: [
      "Managing role-based authentication and workflows",
      "Integrating Stripe payment system",
      "Handling real-time event status updates"
    ],
    improvements: [
      "Add real-time chat between users and organizers",
      "Improve analytics dashboard",
      "Mobile app version"
    ],
    image: "/image/planora project.png"
  },
  {
    id: "skillbridge",
    name: "SkillBridge - Connect with Expert Tutors",
    shortDescription: "A platform connecting students with expert tutors for easy booking and scheduling sessions.",
    fullDescription: "SkillBridge is a platform that connects students with expert tutors, allowing users to browse tutors, check availability, and book sessions easily.",
    techStack: ["TypeScript", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    liveUrl: "https://skillbridge-frontend-chi.vercel.app",
    githubUrl: "https://github.com/Uttamdevsharma/skillbridge_frontend",
    challenges: [
      "Designing booking system with availability logic",
      "Managing user interactions and scheduling",
      "Building scalable backend APIs"
    ],
    improvements: [
      "Add video call integration",
      "Payment system integration",
      "Tutor rating system"
    ],
    image: "/image/skillbridge-project.png"
  },
  {
    id: "thespro",
    name: "ThesPro - Thesis & Project Management System",
    shortDescription: "A role-based digital workflow for managing university thesis and project automation.",
    fullDescription: "ThesPro is a role-based system for managing university thesis and project workflows digitally. It includes Admin, Supervisor, and Student roles with full process automation.",
    techStack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    liveUrl: "https://thespro1.netlify.app",
    githubUrl: "https://github.com/Uttamdevsharma/thespro",
    challenges: [
      "Implementing role-based access control",
      "Managing complex workflows between users",
      "Handling group-based project submission"
    ],
    improvements: [
      "Add notification system",
      "Improve UI/UX",
      "Add report generation system"
    ],
    image: "/image/Thespro-project.png"
  }
];
