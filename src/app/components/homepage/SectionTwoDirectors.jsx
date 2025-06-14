import React from "react";
import styles from "@/styles/homepage/SectionTwoDirectors.module.css";
import clsx from "clsx";

import Image from "next/image";
import director1 from "@/public/homepage/directors/1_l.png";
import director2 from "@/public/homepage/directors/2_l.png";
import director3 from "@/public/homepage/directors/3_l.png";

function SectionTwoDirectors() {
  // left orientation means - image on the left, text on right
  // right orientation means - image on the right, text on left
  const directors = [
    {
      name: "Shri. Devichand K.Jain.",
      title: "From Director’s Desk",
      image: director1,
      description:
        "PHRC Life Space isn’t just a hospital; it’s a vision to redefine how we experience care. Every corridor, department, and room is designed around one central idea — dignity in healing. We are blending the wisdom of Poona Hospital’s legacy with the future of integrative, patient-first care.",
      orientation: "left",
    },
    {
      name: "Rajkumar H. Chordiya",
      title: "From Director’s Desk",
      image: director2,
      description:
        "PHRC Life Space isn’t just a hospital; it’s a vision to redefine how we experience care. Every corridor, department, and room is designed around one central idea — dignity in healing. We are blending the wisdom of Poona Hospital’s legacy with the future of integrative, patient-first care.",
      orientation: "right",
    },
    {
      name: "Purushottam M. Lohia",
      title: "From Director’s Desk",
      image: director3,
      description:
        "PHRC Life Space isn’t just a hospital; it’s a vision to redefine how we experience care. Every corridor, department, and room is designed around one central idea — dignity in healing. We are blending the wisdom of Poona Hospital’s legacy with the future of integrative, patient-first care.",
      orientation: "left",
    },
  ];

  return (
    <section className={styles.section2_directors}>
      <div className={styles.container}>
        {directors.map((director, index) => (
          <div
            key={index}
            className={clsx(
              styles.director_container,
              director.orientation === "left" ? styles.left : styles.right
            )}
          >
            <div className={styles.director_image_container}>
              <Image src={director.image} alt={director.name} />
            </div>
            <div className={styles.director_text_container}>
              <p className={styles.director_title}>{director.title}</p>
              <p className={styles.director_description}>
                {director.description}
              </p>
              <h3 className={styles.director_name}>{director.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionTwoDirectors;
