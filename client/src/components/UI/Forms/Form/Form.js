import styles from "./Form.module.css";
import BackButton from "../../BackButton/BackButton";
export default function Form({ icon, children }) {
  return (
    <main className={styles["form__page"]}>
      <BackButton />
      <section className={styles.form}>
        <img
          src={icon}
          className={styles["form__icon"]}
          alt="A pen representing creating or editing."
        />
        {children}
      </section>
    </main>
  );
}
