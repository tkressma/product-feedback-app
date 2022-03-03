import styles from "./Form.module.css";
import Button from "../../Button/Button";
export default function Form({ icon, backButtonDestination, children }) {
  return (
    <main className={styles.form}>
      <Button type="back-inherit" destination={backButtonDestination} />
      <section className={styles["form__card"]}>
        <img src={icon} className={styles["form__icon"]} />
        {children}
      </section>
    </main>
  );
}
