import styles from "./Headings.module.css";
import { Link } from "react-router-dom";
// This reusable heading takes in a few parameters:
// type: The styling (and optionally tag) that the heading component is going to use (h1, h2, h3).
// white: If true, the color of the font is white. Else, it is the default heading color.
// headingTag: If true, use the associated heading tag determined by the value of type. Defaulted to true.
const Heading = ({
  type,
  white,
  headingTag = true,
  link = false,
  destination,
  children,
}) => {
  // This allows us to set the HTML tag depending on the value of type.
  // If headingTag is false, then it is simply a styled paragraph element.
  const ElementTag = headingTag ? type : "p";

  // Allows us to select the CSS based on type value
  const headingStyle = `heading--${type}`;

  const headingStyling = `${styles.heading} 
  ${styles[headingStyle]} 
  ${white && styles.white}`;

  if (link) {
    return (
      <Link to={destination} className={headingStyling}>
        {children}
      </Link>
    );
  } else {
    return <ElementTag className={headingStyling}>{children}</ElementTag>;
  }
};

export default Heading;
