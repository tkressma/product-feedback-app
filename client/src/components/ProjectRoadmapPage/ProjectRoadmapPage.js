import React from "react";
import styles from "./ProjectRoadmapPage.module.css";
import Heading from "../UI/Heading/Heading";
import BackButton from "../UI/BackButton/BackButton";
import Button from "../UI/Button/Button";

export const ProjectRoadmapPage = () => {
  return (
    <main className={styles.roadmap}>
      <header className={styles["roadmap__header"]}>
        <div>
          <BackButton />
          <Heading type="h1" white={true}>
            Roadmap
          </Heading>
        </div>

        <Button
          btnStyle="violet"
          text="+ Add Feedback"
          link={true}
          destination="create-feedback"
        />
      </header>
    </main>
  );
};
