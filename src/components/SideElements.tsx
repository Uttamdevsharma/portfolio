"use client";

import { Github, Youtube, Facebook, Linkedin } from "lucide-react";
import styles from "./SideElements.module.css";
import Link from "next/link";

export function SideElements() {
  return (
    <>
      <div className={styles.leftSidebar}>
        <Link href="https://github.com" target="_blank" className={styles.iconLink}>
          <Github size={20} />
        </Link>
        <Link href="https://youtube.com" target="_blank" className={styles.iconLink}>
          <Youtube size={20} />
        </Link>
        <Link href="https://facebook.com" target="_blank" className={styles.iconLink}>
          <Facebook size={20} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className={styles.iconLink}>
          <Linkedin size={20} />
        </Link>
      </div>

      <div className={styles.rightSidebar}>
        <a href="mailto:uttamkumar@gmail.com" className={styles.emailLink}>
          uttamkumar@gmail.com
        </a>
      </div>
    </>
  );
}
