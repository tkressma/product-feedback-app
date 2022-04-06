import React, { useState } from "react";
import styles from "./RoadmapFilters.module.css";
import { useSelector } from "react-redux";

export const RoadmapFilters = ({ setFilter }) => {
  const filters = ["Planned", "In-Progress", "Live"];
  const [active, setActive] = useState("Planned");
  const { roadmap } = useSelector((state) => state.suggestions);

  const handleClick = (filter) => {
    setActive(filter);
    setFilter(filter);
  };

  return (
    <div className={styles["roadmap__filters"]}>
      {filters.map((filter) => (
        <button
          className={`${styles["roadmap__filter"]} ${
            filter === active && styles["roadmap__filter--selected"]
          }`}
          onClick={() => handleClick(filter)}
        >
          {filter} ({roadmap[`${filter.toLowerCase()}`]?.length})
        </button>
      ))}
    </div>
  );
};
