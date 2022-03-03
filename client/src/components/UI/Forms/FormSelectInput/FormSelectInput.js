import styles from "../FormInput.module.css";
export default function FormSelectInput({
  inputId,
  value,
  labelHeading,
  labelCaption,
  onChange,
}) {
  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  const status = ["Suggestion", "Planned", "In-Progress", "Live"];
  const optionsArray = inputId === "category" ? categories : status;
  return (
    <>
      <label htmlFor={inputId} className={styles["caption-bold"]}>
        {labelHeading}
      </label>
      <label htmlFor={inputId} className={styles.caption}>
        {labelCaption}
      </label>
      <select name={inputId} id={inputId} onChange={onChange}>
        {optionsArray.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
