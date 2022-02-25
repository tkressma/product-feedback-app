import styles from "./Menu.module.css";
import SuggestionTags from "./SuggestionTags/SuggestionTags";
import ProjectRoadmap from "./ProjectRoadmap/ProjectRoadmap";

export default function Menu({ isOpen }) {
  if (isOpen) {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    document.body.style.overflow = "auto";
    document.body.style.position = "";
    document.body.style.top = "";
  }
  return (
    <section
      className={`${styles.menu} ${isOpen && styles["menu--active"]}`}
      id="menu"
    >
      {isOpen && <div className={styles.menubg} />}

      <SuggestionTags />
      <ProjectRoadmap />
    </section>
  );
}
