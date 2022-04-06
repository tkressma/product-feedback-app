import React from "react";
import styles from "./Roadmap.module.css";
import { RoadmapCard } from "../RoadmapCard/RoadmapCard";
import { useSelector } from "react-redux";
import Heading from "../../UI/Heading/Heading";

export const Roadmap = () => {
  const { roadmap } = useSelector((state) => state.suggestions);

  return (
    <section className={styles.roadmap}>
      <div className={styles.roadmap__status}>
        <div className={styles["roadmap__status_heading"]}>
          <Heading type="h3">Planned ({roadmap["planned"]?.length})</Heading>
        </div>

        <div className={styles["roadmap__list"]}>
          {roadmap["planned"]?.map((suggestion, i) => (
            <RoadmapCard key={i} {...suggestion} />
          ))}
        </div>
      </div>

      <div className={styles.roadmap__status}>
        <div className={styles["roadmap__status_heading"]}>
          <Heading type="h3">
            In-Progress ({roadmap["in-progress"]?.length})
          </Heading>
        </div>

        <div className={styles["roadmap__list"]}>
          {roadmap["in-progress"]?.map((suggestion, i) => (
            <RoadmapCard key={i} {...suggestion} />
          ))}
        </div>
      </div>

      <div className={styles.roadmap__status}>
        <div className={styles["roadmap__status_heading"]}>
          <Heading type="h3">Live ({roadmap["live"]?.length})</Heading>
        </div>

        <div className={styles["roadmap__list"]}>
          {roadmap["live"]?.map((suggestion, i) => (
            <RoadmapCard key={i} {...suggestion} />
          ))}
        </div>
      </div>
    </section>
  );
};
