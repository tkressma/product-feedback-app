import React from "react";
import styles from "./ProjectRoadmapPage.module.css";
import Heading from "../UI/Heading/Heading";
import BackButton from "../UI/BackButton/BackButton";

export const ProjectRoadmapPage = () => {
  return (
    <main>
      <header className={styles["roadmap__header"]}>
        <BackButton />
        <Heading type="h1">Roadmap</Heading>
      </header>
    </main>
  );
};
