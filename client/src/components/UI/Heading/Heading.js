import styles from "./Headings.module.css";

const Heading = ({ type, white, headingTag, children }) => {
  // This allows us to set the HTML tag depending on the value of type.
  // If headingTag is false, then it is simply a styled paragraph element.
  const HeadingLevel = headingTag ? type : "p";

  // Allows us to select the CSS based on type value
  const headingStyle = `heading--${type}`;

  const headingStyling = `${styles.heading} 
  ${styles[headingStyle]} 
  ${white && styles.white}`;

  return <HeadingLevel className={headingStyling}>{children}</HeadingLevel>;
};

export default Heading;
