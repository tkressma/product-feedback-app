import styles from "./Headings.module.css";

const HeadingTypography = ({ type, children }) => {
  const headingType = `heading--${type}`;
  const headingStyling = `${styles.heading} ${styles[headingType]}`;
  return <h1 className={headingStyling}>{children}</h1>;
};

export default HeadingTypography;
