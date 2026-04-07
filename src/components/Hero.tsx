"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const TITLES = [
  "Full Stack Developer",
  "Web Developer",
  "Software Engineer"
];

export function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer = setTimeout(() => {
      const i = loopNum % TITLES.length;
      const fullText = TITLES[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className={styles.heroContainer}>
      <div className={styles.leftContent}>
        <span className={styles.greeting}>Hello! I am</span>
        <h1 className={styles.name}>Uttam Sharma</h1>

        <div className={styles.designationWrapper}>
          <h2 className={styles.designation}>{text}</h2>
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
