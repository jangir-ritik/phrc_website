"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/homepage/SectionSevenUpcomingEvents.module.css";
import Image from "next/image";
import bhoomiPujan from "@/public/homepage/events/bhoomiPujan.png";
import bhoomiPujan_mobile from "@/public/homepage/events/bhoomiPujan_mobile.png";

function SectionSevenUpcomingEvents() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(0);
  const events = [
    {
      image: bhoomiPujan,
      image_mobile: bhoomiPujan_mobile,
    },
    {
      image: bhoomiPujan,
      image_mobile: bhoomiPujan_mobile,
    },
    {
      image: bhoomiPujan,
      image_mobile: bhoomiPujan_mobile,
    },

    // Add more events as needed
  ];

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              <Image
                src={isMobile ? event.image_mobile : event.image}
                alt="event image"
              />
            </div>
          ))}
        </div>

        <div className={styles.dots_nav_container_mobile}>
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
          <nav className={styles.nav_container_mobile}>
            <button onClick={prevSlide} className={styles.nav_button}>
              ←
            </button>
            <button onClick={nextSlide} className={styles.nav_button}>
              →
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default SectionSevenUpcomingEvents;
