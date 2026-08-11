export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  liveUrl: string;
  clientUrl: string;
  serverUrl: string;
  challenges: string[];
  improvements: string[];
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: "doccare",
    name: "DocCare - Health Management Platform",
    shortDescription:
      "A full-stack healthcare platform connecting patients with doctors for appointments, prescriptions, and live video consultations.",
    fullDescription:
      "DocCare is a comprehensive health management platform that streamlines the patient-doctor journey. Patients can discover specialists, book and manage appointments, attend live video consultations, and access digital prescriptions, while doctors manage schedules, patient records, and payments through a dedicated dashboard.",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Stripe"],
    liveUrl: "https://doccare-nine.vercel.app",
    clientUrl: "https://github.com/Uttamdevsharma/healthcare-frontend",
    serverUrl: "https://github.com/Uttamdevsharma/healthcare-backend",
    challenges: [
      "Implementing secure role-based access for patients, doctors, and admins",
      "Building real-time video consultation flow with LiveKit",
      "Handling Stripe payments, appointment slot management, and Redis-backed caching"
    ],
    improvements: [
      "Add an AI-powered symptom checker",
      "Multi-language support for wider accessibility",
      "Native mobile app for on-the-go health management"
    ],
    image: "/image/doccare-preview.svg"
  },
  {
    id: "thespro",
    name: "ThesPro - Thesis & Project Management System",
    shortDescription: "A role-based digital workflow for managing university thesis and project automation.",
    fullDescription:
      "ThesPro is a role-based system for managing university thesis and project workflows digitally. It includes Admin, Supervisor, and Student roles with full process automation.",
    techStack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    liveUrl: "https://thespro1.netlify.app",
    clientUrl: "https://github.com/Uttamdevsharma/thespro-client",
    serverUrl: "https://github.com/Uttamdevsharma/thespro-server",
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
  },
  {
    id: "planora",
    name: "Planora - Event Management Platform",
    shortDescription:
      "A full-stack event management platform connecting organizers and participants with secure registration.",
    fullDescription:
      "Planora is a full-stack event management platform that connects event organizers and participants. It offers event discovery, secure registration, and powerful admin controls.",
    techStack: ["TypeScript", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    liveUrl: "https://planora-client-topaz.vercel.app",
    clientUrl: "https://github.com/Uttamdevsharma/planora_frontend",
    serverUrl: "https://github.com/Uttamdevsharma/planora_backend",
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
    fullDescription:
      "SkillBridge is a platform that connects students with expert tutors, allowing users to browse tutors, check availability, and book sessions easily.",
    techStack: ["TypeScript", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    liveUrl: "https://skillbridge-frontend-chi.vercel.app",
    clientUrl: "https://github.com/Uttamdevsharma/skillbridge_frontend",
    serverUrl: "https://github.com/Uttamdevsharma/SkillBridge_backend",
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
  }
];
