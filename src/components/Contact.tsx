"use client";

import React, { useState } from "react";
import { FaPhone, FaWhatsapp, FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Contact.module.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.titleWrapper}>
        <div className={styles.titleLine}></div>
        <h2 className={styles.title}>Contact Me</h2>
        <div className={styles.titleLine}></div>
      </div>

      <div className={styles.contentRow}>
        <div className={styles.infoColumn}>
          <a href="mailto:uttamrohit4545@gmail.com" className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <FaEnvelope />
            </div>
            <div className={styles.cardText}>
              <span className={styles.label}>Email</span>
              <span className={styles.value}>uttamrohit4545@gmail.com</span>
            </div>
          </a>

          <a href="tel:01701560326" className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <FaPhone />
            </div>
            <div className={styles.cardText}>
              <span className={styles.label}>Phone</span>
              <span className={styles.value}>01701560326</span>
            </div>
          </a>

          <a href="https://wa.me/8801701560326" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <FaWhatsapp />
            </div>
            <div className={styles.cardText}>
              <span className={styles.label}>WhatsApp</span>
              <span className={styles.value}>01701560326</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/uttamkds" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <FaLinkedin />
            </div>
            <div className={styles.cardText}>
              <span className={styles.label}>LinkedIn</span>
              <span className={styles.value}>linkedin.com/in/uttamkds</span>
            </div>
          </a>

          <a href="https://github.com/Uttamdevsharma" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <FaGithub />
            </div>
            <div className={styles.cardText}>
              <span className={styles.label}>GitHub</span>
              <span className={styles.value}>github.com/Uttamdevsharma</span>
            </div>
          </a>
        </div>

        <div className={styles.formColumn}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.inputLabel}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.inputLabel}>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I help you?"
                className={styles.textarea}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : submitted ? "Message Sent!" : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
