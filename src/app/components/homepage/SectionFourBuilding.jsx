"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/homepage/SectionFourBuilding.module.css";
import Image from "next/image";
import clsx from "clsx";
import image1 from "@/public/homepage/building/1.png";
import image2 from "@/public/homepage/building/2.png";
import image3 from "@/public/homepage/building/3.png";

function SectionFourBuilding() {
  const images = [
    { src: image1, alt: "PHRC Health City side elevation" },
    { src: image2, alt: "PHRC Health City bird eye view" },
    { src: image3, alt: "PHRC Health City front elevation" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className={styles.section4_building}>
      <div className={styles.container}>
        <h2 className={styles.title}>PHRC Health City</h2>

        {/* Desktop Layout */}
        <div className={styles.desktop_layout}>
          <Image
            className={clsx(styles.building_image, styles.building_image_1)}
            src={image1}
            alt="PHRC Health City side elevation"
          />
          <Image
            className={clsx(styles.building_image, styles.building_image_2)}
            src={image2}
            alt="PHRC Health City bird eye view"
          />
          <Image
            className={clsx(styles.building_image, styles.building_image_3)}
            src={image3}
            alt="PHRC Health City front elevation"
          />
        </div>

        {/* Mobile Carousel */}
        <div className={styles.mobile_carousel}>
          <div className={styles.carousel_wrapper}>
            <div
              className={styles.carousel_container}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className={styles.carousel_slide}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className={styles.carousel_image}
                    fill
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.carousel_indicators}>
            {images.map((_, index) => (
              <button
                key={index}
                className={clsx(
                  styles.indicator,
                  currentIndex === index && styles.active
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFourBuilding;
