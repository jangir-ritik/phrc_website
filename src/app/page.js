import styles from "@/styles/homepage/page.module.css";
import Carousel from "./components/Carousel";
import { SectionOneLegacy } from "@/app/components/homepage/SectionOneLegacy";
import SectionTwoDirectors from "./components/homepage/SectionTwoDirectors";
import SectionThreeMentors from "./components/homepage/SectionThreeMentors";
import SectionFourBuilding from "./components/homepage/SectionFourBuilding";
import SectionFiveTeam from "./components/homepage/SectionFiveTeam";
import SectionSixNewsletter from "./components/homepage/SectionSixNewsletter";
import SectionSevenUpcomingEvents from "./components/homepage/SectionSevenUpcomingEvents";
import SectionEightTenderRegistration from "./components/homepage/SectionEightTenderRegistration";

export default function Home() {
  return (
    <div className={styles.container}>
      <Carousel />
      <SectionOneLegacy />
      <SectionTwoDirectors />
      <SectionThreeMentors />
      <SectionFourBuilding />
      <SectionFiveTeam />
      <SectionSixNewsletter />
      <SectionSevenUpcomingEvents />
      <SectionEightTenderRegistration />
    </div>
  );
}
