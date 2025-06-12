"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <Image src={logo} width={156} alt="PHRC Lifespace Organisation" />
        </div>
        <div className="header-nav">
          <ul>
            {headerLinks.map((link, index) => (
              <li
                key={index}
                className={`header-nav-item ${link.isActive ? "active" : ""}`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
