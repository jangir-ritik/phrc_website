"use client";
import React, { useState } from "react";
import styles from "@/styles/homepage/SectionFourBuilding.module.css";
import Image from "next/image";
import clsx from "clsx";
import image1 from "@/public/homepage/building/1.png";
import image2 from "@/public/homepage/building/2.png";
import image3 from "@/public/homepage/building/3.png";

function SectionFourBuilding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: image1, alt: "PHRC Health City side elevation" },
    { src: image2, alt: "PHRC Health City bird eye view" },
    { src: image3, alt: "PHRC Health City front elevation" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
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
          <div className={styles.carousel_container}>
            {images.map((image, index) => (
              <div
                key={index}
                className={clsx(
                  styles.carousel_slide,
                  currentSlide === index && styles.active_slide
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className={styles.carousel_image}
                />
              </div>
            ))}
          </div>

          <button
            className={clsx(styles.carousel_button, styles.prev_button)}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className={clsx(styles.carousel_button, styles.next_button)}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>

          <div className={styles.carousel_dots}>
            {images.map((_, index) => (
              <button
                key={index}
                className={clsx(
                  styles.carousel_dot,
                  currentSlide === index && styles.active_dot
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
