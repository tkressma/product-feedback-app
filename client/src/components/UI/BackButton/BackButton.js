import styles from "./BackButton.module.css";
import backIcon from "../../../assets/shared/icon-arrow-left.svg";
import { Link } from "react-router-dom";

export default function BackButton({ white = false }) {
  return (
    <Link
      to={"/"}
      className={`${styles["button--back"]} ${
        white && styles["button--back-white"]
      }`}
    >
      <img
        src={backIcon}
        className={`${styles.backicon} ${white && styles["backicon--white"]}`}
        alt="Arrow pointing to the left signifying a return to previous page"
      />
      Go Back
    </Link>
  );
}
