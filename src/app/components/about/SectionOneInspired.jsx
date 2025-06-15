"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/about/SectionOneInspired.module.css";
import clsx from "clsx";
import image1 from "@/public/about/inspired/1.png";
import image2 from "@/public/about/inspired/2.png";
import image3 from "@/public/about/inspired/3.png";
import image4 from "@/public/about/inspired/4.png";

function SectionOneInspired() {
  const images = [
    {
      src: image1,
      alt: "Medical professional in PHRC",
    },
    {
      src: image2,
      alt: "Hospital corridor",
    },
    {
      src: image3,
      alt: "Medical staff at PHRC",
    },
    {
      src: image4,
      alt: "Medical professional with patient",
    },
  ];

  return (
    <section className={styles.section1_inspired}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Inspired by Tradition
          <br />
          Driven by Innovation
        </h1>
        {images.map((image, index) => (
          <div key={index} className={clsx(styles.image_container, styles[`image_container${index + 1}`])}>
            <Image
                src={image.src}
                alt={image.alt}
                className={clsx(styles.image, styles[`image${index + 1}`])}
              />
            </div>
          ))}
      </div>
    </section>
  );
}

export default SectionOneInspired;
