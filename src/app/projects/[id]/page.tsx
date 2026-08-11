import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaRocket,
  FaGithub,
  FaServer,
  FaCode,
  FaInfoCircle,
  FaExclamationTriangle,
  FaLightbulb,
} from "react-icons/fa";
import { PROJECTS } from "@/constants/projects";
import { Reveal } from "@/components/Reveal";
import styles from "./ProjectDetails.module.css";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.detailsContainer}>
      <Reveal>
        <Link href="/#projects" className={styles.backBtn}>
          <FaArrowLeft /> Back to Projects
        </Link>
      </Reveal>

      <section className={styles.hero}>
        <Reveal>
          <span className={styles.eyebrow}>Project Showcase</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className={styles.projectName}>{project.name}</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className={styles.heroDesc}>{project.shortDescription}</p>
        </Reveal>
        <Reveal delay={240}>
          <div className={styles.actionRow}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionBtn} ${styles.live}`}
            >
              <FaRocket /> Live Demo
            </a>
            <a
              href={project.clientUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionBtn}
            >
              <FaGithub /> Client Repository
            </a>
            <a
              href={project.serverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionBtn}
            >
              <FaServer /> Server Repository
            </a>
          </div>
        </Reveal>
      </section>

      <section className={styles.screenshotSection}>
        <Reveal>
          <div className={styles.screenshotFrame}>
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              sizes="(max-width: 992px) 100vw, 900px"
              className={styles.screenshotImage}
            />
          </div>
        </Reveal>
      </section>

      <div className={styles.contentGrid}>
        <Reveal>
          <section className={styles.glassCard}>
            <h2 className={styles.sectionTitle}>
              <FaCode /> Technology Stack
            </h2>
            <div className={styles.techStack}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={120}>
          <section className={styles.glassCard}>
            <h2 className={styles.sectionTitle}>
              <FaInfoCircle /> About the Project
            </h2>
            <p className={styles.description}>{project.fullDescription}</p>
          </section>
        </Reveal>
      </div>

      <div className={styles.contentGrid}>
        <Reveal>
          <section className={styles.glassCard}>
            <h2 className={styles.sectionTitle}>
              <FaExclamationTriangle /> Key Challenges
            </h2>
            <ul className={styles.list}>
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className={styles.listItem}>
                  {challenge}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={120}>
          <section className={styles.glassCard}>
            <h2 className={styles.sectionTitle}>
              <FaLightbulb /> Future Improvements
            </h2>
            <ul className={styles.list}>
              {project.improvements.map((improvement, idx) => (
                <li key={idx} className={styles.listItem}>
                  {improvement}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>
    </div>
  );
}

// Generate static params for all projects
export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}
