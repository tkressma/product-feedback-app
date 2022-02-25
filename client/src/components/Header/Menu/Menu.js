import styles from "./Menu.module.css";
import SuggestionTags from "./SuggestionTags/SuggestionTags";
import ProjectRoadmap from "./ProjectRoadmap/ProjectRoadmap";

export default function Menu({ isOpen }) {
  return (
    <section
      className={`${styles.menu} ${isOpen && styles["menu--active"]}`}
      id="menu"
    >
      <SuggestionTags />
      <ProjectRoadmap />
    </section>
  );
}
