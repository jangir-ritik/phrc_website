import React from "react";
import styles from "@/styles/about/page.module.css";
import SectionOneInspired from "@/app/components/about/SectionOneInspired";
import SectionTwoHealthCity from "@/app/components/about/SectionTwoHealthCity";
import SectionThreeVisionaries from "@/app/components/about/SectionThreeVisionaries";
import SectionFourQuality from "@/app/components/about/SectionFourQuality";
import SectionTwoPurpose from "../components/about/SectionTwoPurpose";

export const metadata = {
  title: "About Us | PHRC Life",
  description:
    "Learn about PHRC Life's vision, mission, and commitment to healthcare excellence.",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <SectionOneInspired />
      <SectionTwoPurpose />
      <SectionTwoHealthCity />
      <SectionThreeVisionaries />
      <SectionFourQuality />
    </div>
  );
}
