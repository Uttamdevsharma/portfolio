"use client";

import { FaCode, FaServer, FaDatabase, FaCodeBranch, FaRocket, FaCogs } from "react-icons/fa";
import type { IconType } from "react-icons";
import type { CSSProperties } from "react";
import styles from "./Skills.module.css";

interface SkillCategory {
  name: string;
  icon: IconType;
  accent: string;
  glow: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    icon: FaCode,
    accent: "#22d3ee",
    glow: "rgba(34, 211, 238, 0.3)",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "RTK Query",
      "Axios",
    ],
  },
  {
    name: "Backend",
    icon: FaServer,
    accent: "#a3ff12",
    glow: "rgba(163, 255, 18, 0.3)",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Payment Integration"],
  },
  {
    name: "Database",
    icon: FaDatabase,
    accent: "#2dd4bf",
    glow: "rgba(45, 212, 191, 0.3)",
    skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "Mongoose"],
  },
  {
    name: "Version Control",
    icon: FaCodeBranch,
    accent: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.3)",
    skills: ["Git", "GitHub"],
  },
  {
    name: "Deployment",
    icon: FaRocket,
    accent: "#4ade80",
    glow: "rgba(74, 222, 128, 0.3)",
    skills: ["Vercel", "Netlify"],
  },
  {
    name: "DevOps",
    icon: FaCogs,
    accent: "#14b8a6",
    glow: "rgba(20, 184, 166, 0.3)",
    skills: ["Docker", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.titleWrapper}>
        <div className={styles.titleLine}></div>
        <h2 className={styles.title}>Skills & Expertise</h2>
        <div className={styles.titleLine}></div>
      </div>

      <p className={styles.subtitle}>
        Technologies and tools I use to design, build, and ship modern full-stack
        web applications.
      </p>

      <div className={styles.categoriesGrid}>
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.name}
            className={styles.categoryCard}
            style={
              {
                "--cat-accent": category.accent,
                "--cat-glow": category.glow,
              } as CSSProperties
            }
          >
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>
                <category.icon />
              </div>
              <h3 className={styles.categoryName}>{category.name}</h3>
            </div>

            <div className={styles.skillsList}>
              {category.skills.map((skill) => (
                <span key={skill} className={styles.skillChip}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
