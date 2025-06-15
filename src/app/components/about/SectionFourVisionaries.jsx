"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/about/SectionFourVisionaries.module.css";
import Image1 from "@/public/about/visionaries/1.png";
import Image2 from "@/public/about/visionaries/2.png";
import Image3 from "@/public/about/visionaries/3.png";

function SectionFourVisionaries() {
  const visionaries = [
    {
      name: "Devichand K. Jain",
      title: "President",
      organization: "Rajasthani & Gujarati Charitable Foundation",
      description:
        "Hospital and research centre has always been at the forefront of the hospital industry. His leadership has been instrumental in shaping the hospital's growth and development over the years. His vision is to make quality healthcare accessible and affordable for all.",
      image: Image1,
    },
    {
      name: "Rajkumar H. Chordiya",
      title: "Managing Trustee",
      organization: "Rajasthani & Gujarati Charitable Foundation",
      description:
        "He is also the Chairman of Poona Walkeshwar Education Society where he has played a key role in establishing and managing educational institutions. Under his leadership, both the hospital and the business school have been consistently emphasizing quality, innovation, and sustainability.",
      image: Image2,
    },
    {
      name: "Purushottam M. Lohia",
      title: "Joint Managing Trustee",
      organization: "Rajasthani & Gujarati Charitable Foundation",
      description:
        "He plays a key role in contributing the hospital's success. His expertise in healthcare management and operations has helped the hospital maintain its position as a leading healthcare provider. His focus is on building a strong foundation of community-first welfare and growth.",
      image: Image3,
    },
  ];

  return (
    <section className={styles.section4_visionaries}>
      <div className={styles.container}>
        <h2 className={styles.title}>Guided by Visionaries</h2>
        <div className={styles.visionaries_grid}>
          {visionaries.map((visionary, index) => (
            <div key={index} className={styles.visionary_card}>
              <div className={styles.image_container}>
                <Image
                  src={visionary.image.src}
                  alt={visionary.name}
                  width={270}
                  height={270}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.name}>{visionary.name}</h3>
                <p className={styles.position}>{visionary.title}</p>
                <p className={styles.organization}>{visionary.organization}</p>
                <p className={styles.description}>{visionary.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionFourVisionaries;
