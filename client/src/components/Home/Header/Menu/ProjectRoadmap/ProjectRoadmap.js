import styles from "./ProjectRoadmap.module.css";
import Heading from "../../../../UI/Heading/Heading";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ProjectRoadmap() {
  const { roadmap } = useSelector((state) => state.suggestions);

  return (
    <article className={styles.roadmap}>
      <div className={styles["roadmap__header"]}>
        <Heading type="h3">Roadmap</Heading>
        <Link to="/project-roadmap" className={styles["roadmap__link"]}>
          View
        </Link>
      </div>

      <ul className={styles["roadmap__list"]}>
        <li>
          <div className={styles.roadmap__list_type}>
            <div className={`${styles.bullet} ${styles.planned}`} /> Planned
          </div>
          <span className={styles.count}>{roadmap.planned.length}</span>
        </li>

        <li>
          <div className={styles.roadmap__list_type}>
            <div className={`${styles.bullet} ${styles["in-progress"]}`} /> In
            Progress
          </div>
          <span className={styles.count}>{roadmap["in-progress"]?.length}</span>
        </li>

        <li>
          <div className={styles.roadmap__list_type}>
            <div className={`${styles.bullet} ${styles.live}`} /> Live
          </div>
          <span className={styles.count}>{roadmap.live.length}</span>
        </li>
      </ul>
    </article>
  );
}
