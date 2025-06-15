import React from "react";
import styles from "@/styles/about/SectionTwoPurpose.module.css";

function SectionTwoPurpose() {
  return (
    <section className={styles.section2_purpose}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Our Purpose, Our Promise</h2>
          <p className={styles.description}>
            PHRC Life Space Organization was founded in 2014 under the visionary
            leadership of the Rajasthani & Gujarati Charitable Foundation - a
            philanthropic body formed by communities deeply rooted in Pune for
            decades. Their values of service and giving back laid the foundation
            for some of the city&apos;s most respected institutions.
          </p>
          <p className={styles.description}>
            One of their landmark initiatives was the establishment of the Poona
            Hospital & Research Centre, a 300-bed, NABH-accredited tertiary care
            hospital known for quality care, modern facilities, and
            affordability. For over 40 years, it has served as a beacon of trust
            for patients in Pune and beyond.
          </p>
          <p className={styles.description}>
            Building on this legacy, PHRC Life Space Organization was created to
            scale these values into the future—with{" "}
            <span className={styles.bold}>PHRC Health City</span>, a
            next-generation campus combining healthcare, education, and research
            on a 14-acre landscape in Undri, Pune.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionTwoPurpose;
