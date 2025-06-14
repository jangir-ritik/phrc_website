import React from "react";
import styles from "@/styles/contact/page.module.css";
import SectionOneConnect from "@/app/components/contact/SectionOneConnect";
import SectionTwoLocation from "@/app/components/contact/SectionTwoLocation";
import SectionThreeNewsletter from "@/app/components/contact/SectionThreeNewsletter";

export const metadata = {
  title: "Contact Us | PHRC Life",
  description:
    "Get in touch with PHRC Life. We're here to help with your healthcare needs.",
};

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <SectionOneConnect />
      <SectionTwoLocation />
      <SectionThreeNewsletter />
    </main>
  );
}
