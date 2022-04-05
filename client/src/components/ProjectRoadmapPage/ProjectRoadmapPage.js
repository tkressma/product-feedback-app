import React, { useState } from "react";
import styles from "./ProjectRoadmapPage.module.css";
import Heading from "../UI/Heading/Heading";
import BackButton from "../UI/BackButton/BackButton";
import Button from "../UI/Button/Button";
import { Roadmap } from "./Roadmap/Roadmap";
import { RoadmapFilters } from "./RoadmapFilters/RoadmapFilters";
import { MobileRoadmap } from "./MobileRoadmap/MobileRoadmap";
import { useMediaQuery } from "react-responsive";

export const ProjectRoadmapPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [mobileFilter, setMobileFilter] = useState("Planned");

  return (
    <main className={styles.roadmap}>
      <header className={styles["roadmap__header"]}>
        <div>
          <BackButton white={true} />
          <Heading type="h1" white={true}>
            Roadmap
          </Heading>
        </div>

        <Button
          btnStyle="violet"
          text="+ Add Feedback"
          link={true}
          destination="/create-feedback"
        />
      </header>

      <section>
        {isMobile && <RoadmapFilters setFilter={setMobileFilter} />}
        {isMobile && <MobileRoadmap filter={mobileFilter} />}
        {!isMobile && <Roadmap />}
      </section>
    </main>
  );
};
