import React, { useEffect, useState } from "react";
import styles from "./ProjectRoadmapPage.module.css";
import Heading from "../UI/Heading/Heading";
import BackButton from "../UI/BackButton/BackButton";
import Button from "../UI/Button/Button";
import { filterSuggestions } from "../../actions/suggestions";
import { Roadmap } from "./Roadmap/Roadmap";
import { RoadmapFilters } from "./RoadmapFilters/RoadmapFilters";
import { MobileRoadmap } from "./MobileRoadmap/MobileRoadmap";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";

export const ProjectRoadmapPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [mobileFilter, setMobileFilter] = useState("Planned");
  const dispatch = useDispatch();

  // Sort by Most Upvotes on component mount to prevent
  // errors if a user refreshes the page
  useEffect(() => {
    dispatch(
      filterSuggestions({
        category: "All",
        type: "upvotes",
        order: "desc",
      })
    );
  }, []);

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

      {isMobile && <RoadmapFilters setFilter={setMobileFilter} />}
      {isMobile && <MobileRoadmap filter={mobileFilter} />}
      {!isMobile && <Roadmap />}
    </main>
  );
};
