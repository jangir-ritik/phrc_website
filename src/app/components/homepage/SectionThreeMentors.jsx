"use client";
import React, { useState } from "react";
import styles from "@/styles/homepage/SectionThreeMentors.module.css";
import Image from "next/image";
import clsx from "clsx";
import Button from "../Button";

function SectionThreeMentors() {
  const [showAll, setShowAll] = useState(false);
  const MENTORS_PER_ROW = 4;

  const mentors = [
    {
      id: 1,
      name: "Shri. Harinarayan J. Rathi",
      image: "/homepage/mentors/1.png",
    },
    {
      id: 2,
      name: "Shri. Kiritbhai R. Shah",
      image: "/homepage/mentors/2.png",
    },
    {
      id: 3,
      name: "Shri. Mukunddas M. Kasat",
      image: "/homepage/mentors/3.png",
    },
    {
      id: 4,
      name: "Shri. Bhabutmal P. Jain",
      image: "/homepage/mentors/4.png",
    },
    {
      id: 5,
      name: "Shri. Prakash R. Dhariwal",
      image: "/homepage/mentors/5.png",
    },
    {
      id: 6,
      name: "Shri. Nainesh M. Nandu",
      image: "/homepage/mentors/6.png",
    },
    {
      id: 7,
      name: "Shri. Rajesh H. Shah",
      image: "/homepage/mentors/7.png",
    },
    {
      id: 8,
      name: "Shri. Ashok S. Oswal",
      image: "/homepage/mentors/8.png",
    },
    {
      id: 9,
      name: "Shri. Sujay U. Shah",
      image: "/homepage/mentors/9.png",
    },
    {
      id: 10,
      name: "Shri. Inder D. Jain",
      image: "/homepage/mentors/10.png",
    },
    {
      id: 11,
      name: "Shri. Lakhichand B. Khinvasaara",
      image: "/homepage/mentors/11.png",
    },
    {
      id: 12,
      name: "Shri. Aditya P. Lohia",
      image: "/homepage/mentors/12.png",
    },
  ];

  const displayedMentors = showAll
    ? mentors
    : mentors.slice(0, MENTORS_PER_ROW);

  return (
    <section className={styles.section3_mentors}>
      <div className={styles.container}>
        <div className={styles.mentors_header}>
          <div className={styles.mentors_header_text}>
            <h2 className={styles.title}>Our Mentors</h2>
            <p className={styles.description}>
              Board of trustees of Poona Hospital and Research Centre
            </p>
          </div>
          <Button variant="secondary" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All"}
          </Button>
        </div>
        <div
          className={clsx(styles.mentors_container, {
            [styles.expanded]: showAll,
          })}
        >
          {displayedMentors.map((mentor) => (
            <div key={mentor.id} className={styles.mentor_card}>
              <div className={styles.mentor_image_wrapper}>
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={280}
                  height={280}
                  className={styles.mentor_image}
                />
              </div>
              <h3 className={styles.mentor_name}>{mentor.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionThreeMentors;
