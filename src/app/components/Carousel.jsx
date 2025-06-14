"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "@/styles/Carousel.module.css";
import clsx from "clsx";
import Image from "next/image";
import slide1 from "@/public/homepage/slides/slide1.png";
import slide2 from "@/public/homepage/slides/slide2.png";
import slide3 from "@/public/homepage/slides/slide3.png";

const SLIDES = [
  {
    id: 1,
    title: "Where Healing Meets Humanity",
    description: "A holistic healthcare ecosystem in the heart of Pune",
    image: slide1,
  },
  {
    id: 2,
    title: "Empowering Care, Beyond Medicine",
    description: "A holistic healthcare ecosystem in the heart of Pune",
    image: slide2,
  },
  {
    id: 3,
    title: "Spaces Designed for Healing",
    description: "A holistic healthcare ecosystem in the heart of Pune",
    image: slide3,
  },
];

const SLIDE_INTERVAL = 5000;

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const timerRef = useRef(null);
  const carouselRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const goToNextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % SLIDES.length);
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goToNextSlide, SLIDE_INTERVAL);
  }, [goToNextSlide]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-play management
  useEffect(() => {
    if (isVisible) {
      startTimer();
    } else {
      stopTimer();
    }

    return stopTimer;
  }, [isVisible, startTimer, stopTimer]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isVisible) return;

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          setActiveIndex((current) =>
            current === 0 ? SLIDES.length - 1 : current - 1
          );
          break;
        case "ArrowRight":
          event.preventDefault();
          goToNextSlide();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, goToNextSlide]);

  return (
    <section
      ref={carouselRef}
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="Main banner carousel"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
      onFocus={stopTimer}
      onBlur={startTimer}
    >
      {SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;
        const shouldPreload =
          index === activeIndex ||
          index === (activeIndex + 1) % SLIDES.length ||
          index === (activeIndex - 1 + SLIDES.length) % SLIDES.length;

        return (
          <div
            key={slide.id}
            className={clsx(styles.slide, {
              [styles.active]: isActive,
            })}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${SLIDES.length}`}
            aria-hidden={!isActive}
            id={`slide-${index + 1}`}
          >
            {shouldPreload && (
              <Image
                src={slide.image}
                alt=""
                fill
                className={styles.slideImage}
                priority={index === 0}
                quality={85}
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            )}
            <div className={styles.slideContentContainer}>
              <div className={styles.slideContent}>
                <h2 className={styles.slideHeading}>{slide.title}</h2>
                <p className={styles.slideText}>{slide.description}</p>
              </div>
            </div>
          </div>
        );
      })}

      <div
        className={styles.indicators}
        role="tablist"
        aria-label="Carousel navigation"
      >
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            className={clsx(styles.indicator, {
              [styles.active]: index === activeIndex,
            })}
            onClick={() => goToSlide(index)}
            onFocus={stopTimer}
            onBlur={startTimer}
            role="tab"
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === activeIndex}
            aria-controls={`slide-${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
