"use client";
import React, { useState } from "react";
import styles from "@/styles/homepage/SectionSevenUpcomingEvents.module.css";
import Image from "next/image";
import bhoomiPujan from "@/public/homepage/events/bhoomiPujan.png";

function SectionSevenUpcomingEvents() {
  const [currentEvent, setCurrentEvent] = useState(0);
  const events = [
    {
      image: bhoomiPujan,
    },
    {
      image: bhoomiPujan,
    },
    {
      image: bhoomiPujan,
    },

    // Add more events as needed
  ];

  const nextSlide = () => {
    setCurrentEvent((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentEvent((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  return (
    <section className={styles.section7_upcoming_events}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <h2 className={styles.title}>Upcoming Events</h2>
          <nav className={styles.nav_container}>
            <button onClick={prevSlide} className={styles.nav_button}>
              ←
            </button>
            <button onClick={nextSlide} className={styles.nav_button}>
              →
            </button>
          </nav>
        </div>

        <div className={styles.event_container}>
          {events.map((event, index) => (
            <div
              key={index}
              className={styles.event_slide}
              style={{
                transform: `translateX(${(index - currentEvent) * 100}%)`,
              }}
            >
              <Image src={event.image} alt="event image" />
            </div>
          ))}
        </div>

        <div className={styles.dots_container}>
          {events.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${
                index === currentEvent ? styles.active : ""
              }`}
              onClick={() => setCurrentEvent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionSevenUpcomingEvents;
