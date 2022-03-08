import styles from "./Logo.module.css";
export default function Logo() {
  const user = true;

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
        <p className={styles["logo__login"]}>Login</p>
      )}
    </div>
  );
}
