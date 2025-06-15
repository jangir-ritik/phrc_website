"use client";

import React from "react";
import styles from "@/styles/about/SectionFiveVision.module.css";
import Image from "next/image";
import Vision from "@/public/about/vision/eye.svg";
import Mission from "@/public/about/vision/report.svg";

function SectionFiveVision() {
  return (
    <section className={styles.section5_vision}>
      <div className={styles.container}>
        <div className={styles.vision_card}>
          <div className={styles.icon}>
            <Image src={Vision} alt="Vision" />
          </div>
          <h3>Vision</h3>
          <p>
            To create India's most trusted and holistic healthcare destination,
            where every patient receives care with dignity and empathy.
          </p>
        </div>

        <div className={styles.mission_card}>
          <div className={styles.icon}>
            <Image src={Mission} alt="Mission" />
          </div>
          <h3>Mission</h3>
          <p>
            Integrate multi-system healthcare under one roof • Lead community
            wellness through education and outreach • Innovate through design,
            technology, and patient-first service.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionFiveVision;
