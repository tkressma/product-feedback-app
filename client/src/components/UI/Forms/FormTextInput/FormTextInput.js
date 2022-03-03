import styles from "../FormInput.module.css";
export default function FormTextInput({
  inputId,
  large = false,
  labelHeading,
  labelCaption,
}) {
  // If the text input is large, then use a textarea instead of a input of type text.
  let inputBox;
  if (large) {
    inputBox = (
      <textarea
        id={inputId}
        className={large && styles[`input__text--large`]}
      />
    );
  } else {
    inputBox = <input id={inputId} type="text" />;
  }

  return (
    <>
      <label for={inputId} className={styles["caption-bold"]}>
        {labelHeading}
      </label>
      <label for={inputId} className={styles.caption}>
        {labelCaption}
      </label>
      {inputBox}
    </>
  );
}
