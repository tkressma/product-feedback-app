import React from "react";
import styles from "./ProjectRoadmapPage.module.css";
import Heading from "../UI/Heading/Heading";
import BackButton from "../UI/BackButton/BackButton";
import Button from "../UI/Button/Button";
import { useMediaQuery } from "react-responsive";

export const ProjectRoadmapPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

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
          destination="create-feedback"
        />
      </header>

      <section>
        {isMobile && (
          <div className={styles["roadmap__options"]}>
            <button
              className={`${styles["roadmap__option"]} ${styles["roadmap__option--selected"]}`}
            >
              Planned (2)
            </button>
            <button className={styles["roadmap__option"]}>
              In-Progress (3)
            </button>
            <button className={styles["roadmap__option"]}>Live (1)</button>
          </div>
        )}
      </section>
    </main>
  );
};
