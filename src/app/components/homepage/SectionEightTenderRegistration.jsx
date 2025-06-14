import React from "react";
import styles from "@/styles/homepage/SectionEightTenderRegistration.module.css";
import Button from "../Button";

function SectionEightTenderRegistration() {
  return (
    <section className={styles.section8_tender_registration}>
      <div className={styles.container}>
        <h2 className={styles.title}>For Tender Registration</h2>
        <Button variant="tertiary">Click here</Button>
      </div>
    </section>
  );
}

export default SectionEightTenderRegistration;
