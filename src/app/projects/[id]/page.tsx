import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt, FaCode, FaExclamationTriangle, FaLightbulb, FaArrowLeft } from "react-icons/fa";
import { PROJECTS } from "@/constants/projects";
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
      <Link href="/#projects" className={styles.backBtn}>
        <FaArrowLeft /> Back to Projects
      </Link>

      <header className={styles.header}>
        <h1 className={styles.projectName}>{project.name}</h1>
        <div className={styles.linkGroup}>
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.externalLink} ${styles.primary}`}
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.externalLink}
          >
            <FaGithub /> GitHub Repository
          </a>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.imageWrapper}>
          <Image 
            src={project.image} 
            alt={project.name}
            fill
            className={styles.projectImage}
          />
        </div>

        <div className={styles.infoSidebar}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaCode /> Technology Stack
            </h2>
            <div className={styles.techStack}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <FaLightbulb /> About the Project
            </h2>
            <p className={styles.description}>{project.fullDescription}</p>
          </section>
        </div>
      </main>

      <div className={styles.bottomContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaExclamationTriangle /> Key Challenges
          </h2>
          <ul className={styles.list}>
            {project.challenges.map((challenge, idx) => (
              <li key={idx} className={styles.listItem}>{challenge}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <FaLightbulb /> Future Improvements
          </h2>
          <ul className={styles.list}>
            {project.improvements.map((improvement, idx) => (
              <li key={idx} className={styles.listItem}>{improvement}</li>
            ))}
          </ul>
        </section>
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
