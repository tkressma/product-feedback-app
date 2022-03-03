import styles from "./Form.module.css";
import BackButton from "../../BackButton/BackButton";
export default function Form({ icon, backButtonDestination, children }) {
  return (
    <main className={styles.form}>
      <BackButton destination={backButtonDestination} />
      <section className={styles["form__card"]}>
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
