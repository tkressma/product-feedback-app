import React from "react";
import styles from "../FormInput.module.css";
import { DropDownMenu } from "../../DropDownMenu/DropDownMenu";

export default function FormSelectInput({
  inputId,
  labelHeading,
  labelCaption,
  onChange,
}) {
  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  return (
    <>
      <label htmlFor={inputId} className={styles["caption-bold"]}>
        {labelHeading}
      </label>
      <label htmlFor={inputId} className={styles.caption}>
        {labelCaption}
      </label>

      <DropDownMenu
        listOptions={categories}
        setOption={onChange}
        isForm={true}
      />
    </>
  );
}
