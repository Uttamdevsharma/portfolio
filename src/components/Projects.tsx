"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { PROJECTS } from "@/constants/projects";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Projects</h2>
      </div>

      <div className={styles.projectsGrid}>
        {PROJECTS.map((project) => (
          <article key={project.id} className={styles.projectCard}>
            <div className={styles.cardMedia}>
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.projectImage}
              />
              <div className={styles.cardOverlay} />
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveDemoBtn}
                aria-label={`Open ${project.name} live demo`}
                title="Live Demo"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <p className={styles.shortDesc}>{project.shortDescription}</p>

              <div className={styles.cardActions}>
                <Link href={`/projects/${project.id}`} className={styles.viewDetailsBtn}>
                  View Details <FaArrowRight className={styles.arrowIcon} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
