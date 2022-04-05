import styles from "./ProjectRoadmap.module.css";
import Heading from "../../../../UI/Heading/Heading";
export default function ProjectRoadmap() {
  return (
    <article className={styles.roadmap}>
      <Heading type="h3">Project Roadmap</Heading>

      <ul className={styles["roadmap__list"]}>
        <li>
          <div className={styles.roadmap__list_type}>
            <div className={`${styles.bullet} ${styles.planned}`} /> Planned
          </div>
          <span className={styles.count}>2</span>
        </li>

        <li>
          <div className={styles.roadmap__list_type}>
            <div className={`${styles.bullet} ${styles.inprogress}`} /> In
            Progress
          </div>
          <span className={styles.count}>3</span>
        </li>

        <li>
          <div className={styles.roadmap__list_type}>
            <div className={`${styles.bullet} ${styles.live}`} /> Live
          </div>
          <span className={styles.count}>1</span>
        </li>
      </ul>
    </article>
  );
}
