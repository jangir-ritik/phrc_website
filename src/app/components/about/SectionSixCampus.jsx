"use client";

import React from "react";
import styles from "@/styles/about/SectionSixCampus.module.css";
import Image from "next/image";
import Campus from "@/public/homepage/building/1.png";

function SectionSixCampus() {
  return (
    <section className={styles.section6_campus}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Our Campus Glimpse</h2>
          <p className={styles.description}>
            Explore a visual walkthrough of our healing spaces - from open
            courtyards and waiting lounges to high-tech departments and
            residential wings.
          </p>
        </div>

        <div className={styles.media_container}>
          <div className={styles.video_wrapper}>
            <Image
              src={Campus}
              alt="PHRC Campus Preview"
              className={styles.preview_image}
              placeholder="blur"
              quality={100}
              priority
            />
            <div className={styles.overlay}>
              <button className={styles.play_button}>
                <span className={styles.play_icon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSixCampus;
