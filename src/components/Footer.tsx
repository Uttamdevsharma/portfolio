"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.name}>Uttam Kumar Devsharma</div>
      <div className={styles.tagline}>Full Stack Developer</div>

      <div className={styles.socialLinks}>
        <a href="https://github.com/Uttamdevsharma" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/uttamkds" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaLinkedin />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaYoutube />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaFacebook />
        </a>
      </div>

      <div className={styles.copyright}>
        © 2026 Uttam Kumar Devsharma. All rights reserved.
      </div>
    </footer>
  );
}
