import styles from "./FormCard.module.css";
import Button from "../../Button/Button";
export default function FormCard({ icon, backButtonDestination, children }) {
  return (
    <main className={styles.form}>
      <Button type="back-inherit" destination={backButtonDestination} />
      <section className={styles.formcard}>
        <img src={icon} className={styles.icon} />
        {children}
      </section>
    </main>
  );
}
