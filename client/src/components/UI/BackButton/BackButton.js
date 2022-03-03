import styles from "./BackButton.module.css";
import backIcon from "../../../assets/shared/icon-arrow-left.svg";
import { Link } from "react-router-dom";

export default function BackButton({ destination }) {
  return (
    <Link to={destination} className={styles["button--back"]}>
      <img
        src={backIcon}
        className={styles.backicon}
        alt="Arrow pointing to the left signifying a return to previous page"
      />
      Go Back
    </Link>
  );
}
