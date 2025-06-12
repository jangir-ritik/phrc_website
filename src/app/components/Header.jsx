"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import styles from "@/styles/Header.module.css";

import logo from "@/public/common/phrc_logo.png";

function Header() {
  const [activeLink, setActiveLink] = useState(null);

  const headerLinks = [
    {
      label: "Home",
      href: "/",
      isActive: true,
      order: 1,
    },
    {
      label: "About Us",
      href: "/about",
      isActive: false,
      order: 2,
    },
    {
      label: "Hospital",
      href: "/hospital",
      isActive: false,
      order: 3,
    },
    {
      label: "Institute",
      href: "/institute",
      isActive: false,
      order: 4,
    },
    {
      label: "Gallery",
      href: "/gallery",
      isActive: false,
      order: 5,
    },
    {
      label: "Careers",
      href: "/careers",
      isActive: false,
      order: 6,
    },
    {
      label: "Register",
      href: "/register",
      isActive: false,
      order: 7,
    },
    {
      label: "Contact Us",
      href: "/contact",
      isActive: false,
      order: 8,
      unique: true,
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
          <div className={styles.headerLogoInvisibleHolder} />
          <Link href="/" aria-label="PHRC Lifespace Organisation - Home">
            <Image
              src={logo}
              width={156}
              alt="PHRC Lifespace Organisation logo"
            />
          </Link>
        </div>
        <nav
          className={styles.headerNav}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className={styles.headerNavList}>
            {headerLinks.map((link, index) => (
              <li
                key={index}
                className={clsx(styles.headerNavItem, {
                  [styles.active]: link.isActive,
                  [styles.unique]: link.unique,
                })}
              >
                <Link
                  href={link.href}
                  aria-current={link.isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
