"use client";

import React from "react";
import styles from "@/styles/about/SectionThreeHealthCity.module.css";

function SectionThreeHealthCity() {
  const hospitalFeatures = [
    "900+ Bed",
    "Super-Specialty",
    "Hospital (Approved)",
  ];

  const universityPrograms = [
    "Medicine",
    "Nursing",
    "Allied Health Sciences",
    "Law",
    "MBA in Healthcare Management",
  ];

  return (
    <section className={styles.section3_healthCity}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.title_container}>
            <h2 className={styles.title}>
              PHRC Health City - A Living Eco-System
            </h2>
            <p className={styles.description}>
              This integrated space will be designed to balance clinical care,
              knowledge, and innovation under one roof—backed by environmental
              mindfulness and social impact
            </p>
          </div>

          <div className={styles.features_container}>
            <div className={styles.hospital_features}>
              {hospitalFeatures.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.university_features}>
          <h3 className={styles.subtitle}>
            Planned Deemed-to-be University with 5 Institutions
          </h3>
          <div className={styles.programs}>
            {universityPrograms.map((program, index) => (
              <div key={index} className={styles.program}>
                {program}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThreeHealthCity;
