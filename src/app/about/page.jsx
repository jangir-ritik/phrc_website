import React from "react";
import styles from "@/styles/about/page.module.css";
import SectionOneInspired from "@/app/components/about/SectionOneInspired";
import SectionThreeHealthCity from "@/app/components/about/SectionThreeHealthCity";
import SectionFourVisionaries from "@/app/components/about/SectionFourVisionaries";
import SectionEightCommitments from "@/app/components/about/SectionEightCommitments";
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
      <SectionThreeHealthCity />
      <SectionFourVisionaries />
      <SectionFiveVision />
      <SectionSixCampus />
      <SectionSevenPeople />
      <SectionEightCommitments />
    </div>
  );
}
