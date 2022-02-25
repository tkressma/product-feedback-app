import styles from "./Menu.module.css";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import SuggestionTags from "./SuggestionTags/SuggestionTags";
import ProjectRoadmap from "./ProjectRoadmap/ProjectRoadmap";
let test = document.querySelector("body");

export default function Menu({ isOpen }) {
  // Disable scrolling if the menu is opened
  if (isOpen) {
    disableBodyScroll(test);
  } else {
    enableBodyScroll(test);
  }

  return (
    <section
      className={`${styles.menu} ${isOpen && styles["menu--active"]}`}
      id="menu"
    >
      {isOpen && <div className={styles["menu--backdrop"]} />}

      <SuggestionTags />
      <ProjectRoadmap />
    </section>
  );
}
