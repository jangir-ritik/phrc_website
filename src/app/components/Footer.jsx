"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/footer/footer.module.css";
import logo from "@/public/common/phrc_logo_footer.png";
import Button from "@/components/Button";
import clsx from "clsx";
import Google from "@/public/footer/google.svg";
import LinkedIn from "@/public/footer/linkedin.svg";
import Facebook from "@/public/footer/facebook.svg";
import Instagram from "@/public/footer/instagram.svg";
import x from "@/public/footer/x.svg";
import YouTube from "@/public/footer/youtube.svg";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const socialLinks = [
    {
      name: "Google",
      icon: Google,
      href: "https://google.com",
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      href: "https://linkedin.com",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
    },
    {
      name: "Twitter",
      icon: x,
      href: "https://twitter.com",
    },
    {
      name: "YouTube",
      icon: YouTube,
      href: "https://youtube.com",
    },
  ];

  const handleSubscribe = () => {
    setIsSubscribed(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.mainContent}>
          {/* Brand Section */}
          <section className={styles.logoSection} aria-label="About PHRC">
            <Link href="/" aria-label="PHRC Home">
              <Image src={logo} width={156} alt="PHRC logo" />
            </Link>
            <p className={styles.description}>
              PHRC is shaping the future with PHRC Health City in Undri—a
              14-acre integrated hub for advanced healthcare, research, and
              education. The vision is bold: world-class medical infrastructure,
              affordable care, and institutions that nurture the next generation
              of healthcare leaders.
            </p>
          </section>

          <div className={styles.contentSection}>
            {/* Newsletter Section */}
            <section
              className={styles.newsletter}
              aria-label="Newsletter subscription"
            >
              <input
                type="email"
                placeholder="Enter email to get latest updates from PHRC Life"
                className={styles.emailInput}
                value={email}
                onChange={handleEmailChange}
                aria-label="Email subscription input"
              />
              <Button onClick={handleSubscribe}>Subscribe to Newsletter</Button>
            </section>

            <div className={styles.innerContent}>
              {/* Navigation Links */}
              <nav
                className={styles.linksSection}
                aria-label="Footer navigation"
              >
                <div className={styles.linkColumn}>
                  <Link href="/">Home</Link>
                  <Link href="/about-us">About Us</Link>
                  <Link href="/hospital">Hospital</Link>
                  <Link href="/leaders">Leaders</Link>
                </div>
                <div className={clsx(styles.linkColumn, styles.linkColumn2)}>
                  <Link href="/institute">Institute</Link>
                  <Link href="/gallery">Gallery</Link>
                  <Link href="/careers">Careers</Link>
                  <Link href="/tender-registration">Tender Registration</Link>
                </div>
              </nav>

              {/* Contact Information */}
              <address className={styles.contactSection}>
                <span>Contact Us</span>
                <p>
                  <a href="tel:+919112229434">+91-91122 29434</a>
                </p>
                <p>
                  <a href="mailto:info@phrclife.com">info@phrclife.com</a>
                </p>
                <span>Locate Us</span>
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.8673098344657!2d73.93399336959636!3d18.46725099871401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb9a76325f07%3A0x7cc72d18d8f4d20!2sPHRC%20Lifespace%20Organisation!5e0!3m2!1sen!2sin!4v1710472714346!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PHRC Location Map"
                    className={styles.map}
                  />
                </div>
                <p className={styles.address}>
                  CWX8+4X2, Wadachi Wadi Rd,
                  <br />
                  Undri, Pune,
                  <br />
                  Maharashtra 412308
                </p>
              </address>
            </div>

            {/* Social Media Links */}
            <section
              className={styles.socialSection}
              aria-label="Social media links"
            >
              <span>Watch us on</span>
              <nav
                className={styles.socialLinks}
                aria-label="Social media navigation"
              >
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={styles.socialLink}
                    aria-label={`Visit PHRC on ${link.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={link.icon}
                      width={24}
                      height={24}
                      alt={`${link.name} icon`}
                    />
                  </Link>
                ))}
              </nav>
            </section>
          </div>
        </div>

        {/* Copyright Section */}
        <section
          className={styles.copyright}
          aria-label="Copyright information"
        >
          <p>© All rights reserved to PHRC Lifespaces Organization 2025</p>
          <p>Designed with care by Butter Design India</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
