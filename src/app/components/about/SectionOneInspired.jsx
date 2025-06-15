"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/about/SectionOneInspired.module.css";

function SectionOneInspired() {
  const images = [
    {
      src: "/about/inspired/1.png",
      alt: "Medical professional in PHRC",
    },
    {
      src: "/about/inspired/2.png",
      alt: "Hospital corridor",
    },
    {
      src: "/about/inspired/3.png",
      alt: "Medical staff at PHRC",
    },
    {
      src: "/about/inspired/4.png",
      alt: "Medical professional with patient",
    },
  ];

  return (
    <section className={styles.section1_inspired}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Inspired by Tradition
            <br />
            Driven by Innovation
          </h1>
          <p className={styles.description}>
            PHRC Life Space Organization was founded in 2014 under the
            mentorship of Rajasthani & Gujarati Charitable Foundation - a
            platform that has been serving healthcare needs for over 40 years.
            They serve as a beacon of hope and trust that laid the foundation
            for charitable healthcare services.
          </p>
          <p className={styles.description}>
            One of their landmark initiatives was the establishment of the Poona
            Hospital & Research Centre, a 300-bed NABH accredited tertiary care
            hospital known for quality care, modern facilities, and
            affordability. For over 40 years, it has served as a beacon of trust
            by patients in Pune and beyond.
          </p>
          <p className={styles.description}>
            Building on this legacy, PHRC Life Space Organization was created to
            build more secure and fair life spaces—PHRC Health City. A next
            generation campus combining healthcare, education, and research in a
            14-acre landscape - PHRC Life.
          </p>
        </div>
        <div className={styles.images_grid}>
          {images.map((image, index) => (
            <div key={index} className={styles.image_container}>
              <Image
                src={image.src}
                alt={image.alt}
                width={280}
                height={280}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionOneInspired;
