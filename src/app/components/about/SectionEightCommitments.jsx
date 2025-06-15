"use client";

import React from "react";
import styles from "@/styles/about/SectionFiveQuality.module.css";

function SectionFiveQuality() {
  const commitments = [
    "We are ISO certified and aligned with Indian & US NABH",
    "Cost-effectively sustainable",
    "Clinical transparency",
    "Ethical transparency",
    "Regional & national outreach",
    "Continuous patient feedback",
  ];

  return (
    <section className={styles.section5_quality}>
      <div className={styles.container}>
        <h2 className={styles.title}>Quality Commitments</h2>
        <div className={styles.commitments_grid}>
          {commitments.map((commitment, index) => (
            <div key={index} className={styles.commitment_card}>
              {commitment}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionFiveQuality;
