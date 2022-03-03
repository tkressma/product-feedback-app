import styles from "./NoSuggestions.module.css";
import Heading from "../../../../UI/Heading/Heading";
import { useMediaQuery } from "react-responsive";
import Button from "../../../../UI/Button/Button";
import emptyIllustration from "../../../../../assets/suggestions/illustration-empty.svg";
const NoSuggestions = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <article className={styles["nosuggestions"]}>
      <img src={emptyIllustration} className={styles["nosuggestions__img"]} />

      <Heading type={isMobile ? "h3" : "h1"} headingTag={false}>
        There is no feedback yet
      </Heading>
      <p className={styles["nosuggestions__p"]}>
        Got a suggestions? Found a bug that needs to be squashed? We love
        hearing about new ideas to improve our app.
      </p>

      <Button type="violet">+ Add Feedback</Button>
    </article>
  );
};

export default NoSuggestions;
