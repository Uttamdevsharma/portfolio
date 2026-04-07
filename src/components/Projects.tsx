"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imagePlaceholder}>
              <Image 
                src={project.image} 
                alt={project.name}
                width={400}
                height={220}
                className={styles.projectImage}
              />
            </div>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.shortDesc}>{project.shortDescription}</p>
            <Link 
              href={`/projects/${project.id}`}
              className={styles.viewDetailsBtn}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
