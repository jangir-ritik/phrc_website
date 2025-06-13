import React from "react";
import styles from "@/styles/SectionOneLegacy.module.css";
import Image from "next/image";
import legacy_image_1 from "@/public/legacy/1.png";
import legacy_image_2 from "@/public/legacy/2.png";
import legacy_image_3 from "@/public/legacy/3.png";
import legacy_image_4 from "@/public/legacy/4.png";
import clsx from "clsx";
import Button from "./Button";

export function SectionOneLegacy() {
  return (
    <section className={styles.section1_legacy}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <h2 className={styles.title}>A Legacy in making...</h2>
          <Button>Learn More About Us</Button>
        </div>
        <div className={styles.description_container}>
          <p className={styles.description}>
            Under the mentorship of Rajasthani and Gujarati Charitable
            Foundations - PHRC Lifespace Organisation was founded in 2014.
            Rajasthani and Gujarati Charitable Foundations - Poona Hospital &
            Research Centre - A community-driven initiative inspired by the
            values of service, compassion, and progress. Poona Hospital and
            Research Centre is Pune&apos;s trusted 300-bed multi-specialty
            hospital with 40+ years of clinical excellence.
          </p>
          <p className={styles.description}>
            Now, PHRC Lifespace Organisation is shaping the future with PHRC
            Health City in Undri—a 14-acre integrated hub for education,
            research and advanced healthcare. The vision is bold: world-class
            medical infrastructure, reasonable care, and institutions that
            nurture the next generation of healthcare leaders.
          </p>
        </div>
      </div>
      <div className={clsx(styles.legacy_image_container, styles.container)}>
        <Image
          className={styles.legacy_image}
          src={legacy_image_1}
          alt="legacy_image_1"
        />
        <Image
          className={styles.legacy_image}
          src={legacy_image_2}
          alt="legacy_image_2"
        />
        <Image
          className={styles.legacy_image}
          src={legacy_image_3}
          alt="legacy_image_3"
        />
        <Image
          className={styles.legacy_image}
          src={legacy_image_4}
          alt="legacy_image_4"
        />
      </div>
    </section>
  );
}
