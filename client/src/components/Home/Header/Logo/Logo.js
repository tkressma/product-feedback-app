import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
export default function Logo() {
  const user = null;

  return (
    <div className={styles.logo}>
      <div className={styles["logo__text"]}>
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </div>

      {user ? (
        <div className={styles["user__controls"]}>
          <p>Welcome Tom</p>
          <p>Logout</p>
        </div>
      ) : (
        <Link to="/auth" className={styles["logo__login"]}>
          Login
        </Link>
      )}
    </div>
  );
}
