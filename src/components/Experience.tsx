"use client";

import React, { useState } from "react";
import { GraduationCap, Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import styles from "./Experience.module.css";

interface ExperienceItem {
  id: number;
  title: string;
  organization: string;
  location: string;
  duration: string;
  description: string;
  type: "education" | "work";
  roles?: string[];
  skills?: string[];
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    title: "Software Development Intern",
    organization: "Battery Low Interactive Ltd.",
    location: "Baridhara, Dhaka, Bangladesh",
    duration: "09/2025 - 12/2025",
    description: "Worked on backend development and application debugging.",
    type: "work",
    skills: ["C#", ".NET"],
    roles: [
      "Assisted in developing backend features using C# and .NET",
      "Worked on debugging and improving existing application modules",
      "Collaborated with team members on small-scale projects",
      "Learned best practices of software development and version control",
    ],
  },
  {
    id: 2,
    title: "Undergrad Student",
    organization: "Green University of Bangladesh",
    location: "Dhaka, Bangladesh",
    duration: "02/2022 - 02/2026",
    description: "Completed B.Sc in Computer Science and Engineering",
    type: "education",
  },
];

export function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Let me show you my journey!</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>

          {EXPERIENCE_DATA.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}
              >
                {/* Timeline Icon */}
                <div className={styles.timelineIconWrapper}>
                  <div className={styles.timelineIcon}>
                    {item.type === "education" ? (
                      <GraduationCap size={20} />
                    ) : (
                      <Briefcase size={20} />
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className={styles.timelineContent}>
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.organization}>{item.organization}</p>
                    </div>

                    <div className={styles.cardMeta}>
                      <div className={styles.metaItem}>
                        <Calendar size={14} />
                        <span>{item.duration}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className={styles.description}>{item.description}</p>

                    {item.skills && (
                      <div className={styles.skillsList}>
                        {item.skills.map((skill) => (
                          <span key={skill} className={styles.skillBadge}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.roles && (
                      <div className={styles.expandableSection}>
                        <button
                          className={styles.viewDetailsBtn}
                          onClick={() => toggleExpand(item.id)}
                        >
                          {isExpanded ? (
                            <>
                              Hide Details <ChevronUp size={16} />
                            </>
                          ) : (
                            <>
                              View Details <ChevronDown size={16} />
                            </>
                          )}
                        </button>

                        <div
                          className={`${styles.rolesContent} ${
                            isExpanded ? styles.expanded : ""
                          }`}
                        >
                          <h4 className={styles.rolesTitle}>Role:</h4>
                          <ul className={styles.rolesList}>
                            {item.roles.map((role, rIndex) => (
                              <li key={rIndex} className={styles.roleItem}>
                                {role}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Vertical Date (Desktop only alternative) */}
                <div className={styles.timelineDate}>{item.duration}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
