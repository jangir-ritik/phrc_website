import Carousel from "./components/Carousel";
import { SectionOneLegacy } from "@/app/components/SectionOneLegacy";
import SectionTwoDirectors from "./components/SectionTwoDirectors";
import SectionThreeMentors from "./components/SectionThreeMentors";

export default function Home() {
  return (
    <>
      <Carousel />
      <SectionOneLegacy />
      <SectionTwoDirectors />
      <SectionThreeMentors />
    </>
  );
}
