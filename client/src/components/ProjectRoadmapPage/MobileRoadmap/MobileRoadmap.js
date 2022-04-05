import React from "react";
import styles from "./MobileRoadmap.module.css";
import { RoadmapCard } from "../RoadmapCard/RoadmapCard";
import { useSelector } from "react-redux";
import Heading from "../../UI/Heading/Heading";

export const MobileRoadmap = ({ filter }) => {
  const { suggestions } = useSelector((state) => state.suggestions);

  let filteredSuggestions = suggestions.filter((suggestion) => {
    return suggestion.status === filter.toLowerCase();
  });

  let description;
  console.log(filter);
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
