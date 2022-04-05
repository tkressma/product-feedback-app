import React, { useState } from "react";
import styles from "./RoadmapFilters.module.css";

export const RoadmapFilters = ({ setFilter }) => {
  const filters = ["Planned", "In-Progress", "Live"];
  const [active, setActive] = useState("Planned");

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
          {filter} (2)
        </button>
      ))}
    </div>
  );
};
