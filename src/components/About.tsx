"use client";

import Image from "next/image";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.titleWrapper}>
        <div className={styles.titleLine}></div>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.titleLine}></div>
      </div>

      <div className={styles.contentRow}>
        <div className={styles.leftColumn}>
          <p className={styles.description}>
            I am <span className={styles.accentText}>Uttam Kumar Devsharma</span>, a passionate Full Stack Developer with a strong interest in building modern, scalable, and user-friendly web applications. My journey into programming started from curiosity about how websites work, which gradually turned into a deep passion for development.
          </p>

          <p className={styles.description}>
            I enjoy working with both frontend and backend technologies, especially{" "}
            <span className={styles.accentText}>TypeScript</span>,{" "}
            <span className={styles.accentText}>React.js</span>,{" "}
            <span className={styles.accentText}>Next.js</span>,{" "}
            <span className={styles.accentText}>Node.js</span>,{" "}
            <span className={styles.accentText}>PostgreSQL</span>, and{" "}
            <span className={styles.accentText}>MongoDB</span>. I love solving real-world problems through code and continuously improving my skills by learning and building new projects.
          </p>

          <p className={styles.description}>
            Beyond programming, I enjoy music — I play guitar and love singing, which helps me stay creative and balanced.
          </p>

          <p className={styles.description}>
            I am currently focused on growing as a software engineer and contributing to impactful real-world projects.
          </p>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.imageContainer}>
            <div className={styles.imageBorder}></div>
            <div className={styles.imageWrapper}>
              <Image
                src="/image/About-Me.png"
                alt="Uttam Kumar Devsharma"
                width={350}
                height={400}
                className={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
