import styles from "./Menu.module.css";
import SuggestionTags from "./SuggestionTags/SuggestionTags";
import ProjectRoadmap from "./ProjectRoadmap/ProjectRoadmap";

export default function Menu() {
  return (
    <section className={styles.menu}>
      <SuggestionTags />
      <ProjectRoadmap />
    </section>
  );
}
