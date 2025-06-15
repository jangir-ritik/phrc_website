import React from "react";
import Button from "../Button";
import styles from "@/styles/homepage/SectionFiveTeam.module.css";
import Link from "next/link";

function SectionFiveTeam() {
  return (
    <section className={styles.section5_team}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <h2 className={styles.title}>The People Who Make It Possible</h2>
          <p className={styles.description}>
            Consultants, Architects, Lawyers, — our team is our strength. With
            decades of expertise and an ethos of service, they are here for
            every step of our mission.
          </p>
        </div>
        <Link href="/about#section7_people">
          <Button>Learn More</Button>
        </Link>
      </div>
    </section>
  );
}

export default SectionFiveTeam;
