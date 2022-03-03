import styles from "./Suggestion.module.css";
import Tag from "../../../../UI/Tag/Tag";
import UpvoteButton from "./UpvoteButton/UpvoteButton";
import CommentLink from "./CommentLink/CommentLink";
import Heading from "../../../../UI/Heading/Heading";
import TextBody from "../../../../UI/TextBody/TextBody";
export default function Suggestion({ suggestionData }) {
  // Destructuring props
  const { title, description, category, upvotes, comments } = suggestionData;

  return (
    <article className={styles.suggestion}>
      <UpvoteButton upvotes={upvotes} />

      {/* Suggestion title, description, and tag */}
      <section className={styles["suggestion__info"]}>
        <Heading type="h3">{title}</Heading>
        <TextBody type="b1">{description}</TextBody>
        <Tag category={category.charAt(0).toUpperCase() + category.slice(1)} />
      </section>

      <CommentLink comments={comments} />
    </article>
  );
}
