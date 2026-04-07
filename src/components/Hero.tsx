"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.leftContent}>
        <span className={styles.greeting}>Hello! I am</span>
        <h1 className={styles.name}>Uttam Kumar Devsharma</h1>
        
        <div className={styles.designationWrapper}>
          <h2 className={styles.designation}>Full Stack Developer</h2>
          <span className={styles.cursor}></span>
        </div>
        
        <p className={styles.intro}>
          I&apos;m a full stack software engineer specializing in building and designing exceptional digital
          experiences. I am continuously looking forward to acquiring new skills and exploring new
          technologies as well as meeting new people.
        </p>
        
        <button className={styles.resumeBtn}>Resume</button>
      </div>
      
      <div className={styles.rightContent}>
        <div className={styles.imageWrapper}>
          {/* We will use Next/Image since it's standard Next.js */}
          <Image
            src="/image/profile-hero.png"
            alt="Uttam Kumar Devsharma"
            width={400}
            height={400}
            className={styles.profileImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
