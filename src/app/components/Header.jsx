"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "@/styles/Header.module.css";

import menuIcon from "@/public/common/menu.svg";
import logo from "@/public/common/phrc_logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const headerLinks = [
    {
      label: "Home",
      href: "/",
      order: 1,
    },
    {
      label: "About Us",
      href: "/about",
      order: 2,
    },
    {
      label: "Hospital",
      href: "/hospital",
      order: 3,
    },
    {
      label: "Institute",
      href: "/institute",
      order: 4,
    },
    {
      label: "Gallery",
      href: "/gallery",
      order: 5,
    },
    {
      label: "Careers",
      href: "/careers",
      order: 6,
    },
    {
      label: "Register",
      href: "/register",
      order: 7,
    },
    {
      label: "Contact Us",
      href: "/contact",
      order: 8,
      unique: true,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <Image src={menuIcon} width={24} height={24} alt="" />
        </button>

        <nav
          className={clsx(styles.headerNav, {
            [styles.headerNavOpen]: isMenuOpen,
          })}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className={styles.headerNavList}>
            {headerLinks.map((link, index) => (
              <li
                key={index}
                className={clsx(styles.headerNavItem, {
                  [styles.active]: pathname === link.href,
                  [styles.unique]: link.unique,
                })}
              >
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
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
