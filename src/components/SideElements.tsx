"use client";

import { FaGithub, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import styles from "./SideElements.module.css";
import Link from "next/link";

export function SideElements() {
  return (
    <>
      <div className={styles.leftSidebar}>
        <Link href="https://github.com" target="_blank" className={styles.iconLink}>
          <FaGithub size={20} />
        </Link>
        <Link href="https://youtube.com" target="_blank" className={styles.iconLink}>
          <FaYoutube size={20} />
        </Link>
        <Link href="https://facebook.com" target="_blank" className={styles.iconLink}>
          <FaFacebook size={20} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className={styles.iconLink}>
          <FaLinkedin size={20} />
        </Link>
      </div>

      <div className={styles.rightSidebar}>
        <a href="mailto:uttam.devsharma@gmail.com" className={styles.emailLink}>
          uttam.devsharma@gmail.com
        </a>
      </div>
    </>
  );
}
