"use client";

import React, { useState } from "react";
import styles from "@/styles/about/SectionSevenPeople.module.css";
import Button from "@/app/components/Button";

function SectionSevenPeople() {
  const [activeCategory, setActiveCategory] = useState("Consultants");

  const categories = [
    "Consultants",
    "Lawyers",
    "Architect",
    "Advisors",
    "Board",
  ];

  // This would be replaced with actual data
  const teamMembers = {
    Consultants: Array(10).fill({ id: 1 }),
    Lawyers: Array(8).fill({ id: 1 }),
    Architect: Array(5).fill({ id: 1 }),
    Advisors: Array(6).fill({ id: 1 }),
    Board: Array(4).fill({ id: 1 }),
  };

  return (
    <section className={styles.section7_people} id="section7_people">
      <div className={styles.container}>
        <div className={styles.header_container}>
          <h2 className={styles.title}>The People Who Make It Possible</h2>
          <p className={styles.description}>
            Doctors, nurses, therapists, technicians, and administrators — our
            team is our strength. With decades of expertise and an ethos of
            service, they are here for every step of your healing journey.
          </p>
        </div>

        <div className={styles.content_container}>
          <div className={styles.filter_buttons}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "primary" : "secondary"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className={styles.team_grid}>
            {teamMembers[activeCategory].map((_, index) => (
              <div key={index} className={styles.team_member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSevenPeople;
