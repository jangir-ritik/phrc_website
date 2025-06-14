"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "@/styles/Header.module.css";

import menuIcon from "@/public/common/menu.svg";
import closeIcon from "@/public/common/cross.svg";
import logo from "@/public/common/phrc_logo.png";
import logo_footer from "@/public/common/phrc_logo_footer.png";

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
          {!isMenuOpen && (
            <Image src={menuIcon} width={40} height={40} alt="" />
          )}
        </button>

        <nav
          className={clsx(styles.headerNav, {
            [styles.headerNavOpen]: isMenuOpen,
          })}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className={styles.headerNavLogoContainer}>
            <Image
              className={
                isMenuOpen ? styles.headerNavLogoOpen : styles.headerNavLogo
              }
              src={logo_footer}
              width={100}
              height={90}
              alt="PHRC Lifespace Organisation logo"
            />
            <button
              className={styles.closeButton}
              onClick={toggleMenu}
              aria-label="Close navigation menu"
            >
              <Image src={closeIcon} width={40} height={40} alt="" />
            </button>
          </div>
          <ul
            className={
              isMenuOpen ? styles.headerNavListOpen : styles.headerNavList
            }
          >
            {headerLinks.map((link, index) => (
              <li
                key={index}
                className={clsx(
                  isMenuOpen ? styles.headerNavItemOpen : styles.headerNavItem,
                  {
                    [styles.active]: pathname === link.href,
                    [styles.unique]: link.unique,
                  }
                )}
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
