"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/error.module.css";
import Button from "@/app/components/Button";

export default function Error({ error, reset }) {
  return (
    <main className={styles.errorContainer}>
      <div className={styles.content}>
        <h1>Oops!</h1>
        <h2>Something went wrong</h2>
        <p>
          We encountered an unexpected error. Our team has been notified and is
          working to fix it.
        </p>
        <div className={styles.buttonGroup}>
          <Button onClick={reset}>Try Again</Button>
          <Link href="/">
            <Button variant="secondary">Return Home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
