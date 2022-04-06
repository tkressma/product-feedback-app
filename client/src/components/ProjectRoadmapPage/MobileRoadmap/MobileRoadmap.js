import React from "react";
import styles from "./MobileRoadmap.module.css";
import { RoadmapCard } from "../RoadmapCard/RoadmapCard";
import { useSelector } from "react-redux";
import Heading from "../../UI/Heading/Heading";

// Retrieve each suggestion in a selected category from the roadmap
// and display to the user.
export const MobileRoadmap = ({ filter }) => {
  const { roadmap } = useSelector((state) => state.suggestions);
  let filteredSuggestions = roadmap[`${filter.toLowerCase()}`];

  let description;
  switch (filter) {
    case "Planned":
      description = "Ideas prioritized for research";
      break;
    case "In-Progress":
      description = "Currenty being developed";
      break;
    case "Live":
      description = "Released features";
      break;
    default:
      description = "Ideas prioritized for research";
      break;
  }

  return (
    <section className={styles.roadmap}>
      <div className={styles["roadmap__heading"]}>
        <Heading type="h2">{filter}</Heading>
        <p className={styles["roadmap__description"]}>{description}</p>
      </div>

      <div className={styles.list}>
        {filteredSuggestions.map((suggestion, index) => (
          <RoadmapCard key={index} {...suggestion} />
        ))}
      </div>
    </section>
  );
};
