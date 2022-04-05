import React, { useState } from "react";
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
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <label htmlFor={inputId} className={styles["caption-bold"]}>
        {labelHeading}
      </label>
      <label htmlFor={inputId} className={styles.caption}>
        {labelCaption}
      </label>
      <select
        className={`${styles["select"]} ${
          isActive && styles["select--active"]
        }`}
        name={inputId}
        id={inputId}
        onChange={onChange}
        onClick={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        value={value}
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
