import React from "react";
import Button from "../Button";
import Image from "next/image";
import newsletter_image from "@/public/homepage/newsletter/newsletter_image.png";
import styles from "@/styles/homepage/SectionSixNewsletter.module.css";

function SectionSixNewsletter() {
  return (
    <section className={styles.section6_newsletter}>
      <div className={styles.container}>
        <div className={styles.image_container_mobile}>
          <Image src={newsletter_image} alt="Newsletter" />
        </div>
        <div className={styles.title_container}>
          <h2 className={styles.title}>Stay informed, Stay Healthy</h2>
          <p className={styles.description}>
            Get updates on events, expert health tips, and special consultations
            patient-first care.
          </p>
          <div className={styles.form_container}>
            <input
              type="email"
              placeholder="Enter email to get latest updates from PHRC Life"
            />
            <Button variant="tertiary">Subscribe to Newsletter</Button>
          </div>
        </div>
        <div className={styles.image_container}>
          <Image src={newsletter_image} alt="Newsletter" />
        </div>
      </div>
    </section>
  );
}

export default SectionSixNewsletter;
