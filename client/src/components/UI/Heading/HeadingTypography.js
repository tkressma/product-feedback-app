import styles from "./Headings.module.css";

const Heading = ({ type, children }) => {
  const HeadingLevel = type;
  const headingType = `heading--${type}`;
  const headingStyling = `${styles.heading} ${styles[headingType]}`;
  return <HeadingLevel className={headingStyling}>{children}</HeadingLevel>;
};

export default Heading;
