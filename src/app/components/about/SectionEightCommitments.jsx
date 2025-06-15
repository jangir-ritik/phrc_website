"use client";

import React from "react";
import styles from "@/styles/about/SectionEightCommitments.module.css";

function SectionEightCommitments() {
  const commitments = [
    "Clinical quality and safety",
    "Ethical transparency",
    "Hygiene & infection control",
    "Continuous patient feedback & audits",
  ];

  return (
    <section className={styles.section8_commitments}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Quality Commitments</h2>
          <p className={styles.description}>
            We are ISO-certified and aligned with NABH and NABL standards,
            maintaining:
          </p>
        </div>

        <div className={styles.commitments_grid}>
          {commitments.map((commitment, index) => (
            <div key={index} className={styles.commitment_card}>
              <span className={styles.commitment_text}>{commitment}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionEightCommitments;
