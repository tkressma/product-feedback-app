import styles from "../FormInput.module.css";
export default function FormSelectInput({
  inputId,
  value = "feature",
  labelHeading,
  labelCaption,
  onChange,
}) {
  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  const status = ["Suggestion", "Planned", "In-Progress", "Live"];
  const optionsArray = inputId === "category" ? categories : status;

  // When editing a suggestion, the category data recieved from the
  // server is all lowercase. In order to match the <select> tag options,
  // it must be properly formatted... E.G. "ui" => "UI", "feature" => "Feature"...
  let formattedValue =
    value === "ui" || value === "ux"
      ? value.toUpperCase()
      : value.charAt(0).toUpperCase() + value.slice(1);

  return (
    <>
      <label htmlFor={inputId} className={styles["caption-bold"]}>
        {labelHeading}
      </label>
      <label htmlFor={inputId} className={styles.caption}>
        {labelCaption}
      </label>
      <select
        name={inputId}
        id={inputId}
        onChange={onChange}
        value={formattedValue}
      >
        {optionsArray.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
