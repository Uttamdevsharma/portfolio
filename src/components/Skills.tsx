"use client";

import React, { useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Skills.module.css";

const SKILLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Mongoose",
  "Docker",
  "C++",
];

interface Tag {
  x: number;
  y: number;
  z: number;
  text: string;
}

export function Skills() {
  const wireframeRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pointsRef = useRef<Tag[]>([]);
  const animationRef = useRef<number | null>(null);

  // Keep track of total rotation for the wireframe
  const rotationY = useRef(0);
  const rotationX = useRef(0);

  useEffect(() => {
    const radius = 180;
    
    // 1. Initialize Technology Labels evenly distributed on a sphere
    pointsRef.current = SKILLS.map((text, i) => {
      const n = SKILLS.length;
      const phi = Math.acos(-1 + (2 * i) / n);
      const theta = Math.sqrt(n * Math.PI) * phi;
      return {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        text,
      };
    });

    // Rotation speeds (Globe spin)
    const angleX = 0.0002;
    const angleY = 0.003; 

    const animate = () => {
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      pointsRef.current.forEach((point, i) => {
        // Rotate around X axis (tilt)
        const y1 = point.y * cosX - point.z * sinX;
        const z1 = point.z * cosX + point.y * sinX;
        point.y = y1;
        point.z = z1;

        // Rotate around Y axis (globe spin)
        const x2 = point.x * cosY + point.z * sinY;
        const z2 = point.z * cosY - point.x * sinY;
        point.x = x2;
        point.z = z2;

        const sphereRadius = 180;
        const depth = 500;
        
        // REFINED VISIBILITY: Skills appear faster as they rotate to the front
        // Items start appearing as soon as they cross behind the horizon (z > -30)
        let opacity = 0;
        if (point.z > -30) {
          // Sharp but smooth transition at the equator
          opacity = Math.min(1, (point.z + 30) / 60); 
        }

        const scale = (depth + point.z) / depth; 
        const el = tagRefs.current[i];

        if (el) {
          el.style.transform = `translate(-50%, -50%) translate3d(${point.x}px, ${point.y}px, ${point.z}px) scale(${scale})`;
          el.style.opacity = opacity.toString();
          el.style.zIndex = Math.round(point.z + sphereRadius).toString();
        }
      });

      // Synchronize Wireframe Rotation
      rotationY.current += angleY;
      rotationX.current += angleX;
      if (wireframeRef.current) {
        wireframeRef.current.style.transform = `rotateX(${rotationX.current}rad) rotateY(${rotationY.current}rad)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.contentRow}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Skills & Expertise</h2>

          <p className={styles.description}>
            The main area of my expertise is web technologies such as JavaScript,
            TypeScript, <span className={styles.accentText}>React.js</span>,
            Next.js, <span className={styles.accentText}>Node.js</span>, and{" "}
            <span className={styles.accentText}>Express.js</span>, building modern
            and scalable web applications. I also work with databases like
            PostgreSQL and MongoDB, and tools like Prisma and Mongoose.
          </p>

          <div className={styles.linkedinContainer}>
            <FaLinkedin className={styles.linkedinIcon} />
            <p className={styles.linkedinText}>
              Visit my{" "}
              <a
                href="https://www.linkedin.com/in/uttamkds"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinLink}
              >
                LinkedIn
              </a>{" "}
              profile for more details
            </p>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.sphereContainer}>
            {/* Globe Wireframe (Rotating) */}
            <div className={styles.globeWireframe} ref={wireframeRef}>
              {/* Vertical Rings (Longitude) */}
              {[0, 45, 90, 135].map((angle) => (
                <div 
                  key={`v-${angle}`} 
                  className={styles.longitudeRing} 
                  style={{ transform: `rotateY(${angle}deg)` }}
                />
              ))}
              {/* Horizontal Rings (Latitude) */}
              {[-60, -30, 0, 30, 60].map((y) => (
                <div 
                  key={`h-${y}`} 
                  className={styles.latitudeRing} 
                  style={{ top: `${50 + y/4}%`, width: `${Math.cos(y * Math.PI / 180) * 100}%`, height: `${Math.cos(y * Math.PI / 180) * 100}%` }}
                />
              ))}
            </div>

            {/* Technology Labels */}
            {SKILLS.map((skill, index) => (
              <div
                key={skill}
                className={styles.skillNode}
                ref={(el) => {
                  tagRefs.current[index] = el;
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
