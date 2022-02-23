import styles from "./Headings.module.css";

const Heading = ({ type, children }) => {
  // This allows us to set the HTML tag depending on the value of type.
  const HeadingLevel = type;

  // Allows us to select the CSS based
  const headingStyle = `heading--${type}`;
  const headingStyling = `${styles.heading} ${styles[headingStyle]}`;
  return <HeadingLevel className={headingStyling}>{children}</HeadingLevel>;
};

export default Heading;
