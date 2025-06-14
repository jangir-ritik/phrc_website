"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/error.module.css";
import Button from "@/app/components/Button";

export default function NotFound() {
  return (
    <main className={styles.errorContainer}>
      <div className={styles.content}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          We couldn't find the page you're looking for. The page might have been
          moved, deleted, or never existed.
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
