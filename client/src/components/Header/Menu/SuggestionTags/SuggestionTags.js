import styles from "./SuggestionTags.module.css";
import Tag from "../../../UI/Tag/Tag";
export default function SuggestionTags() {
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  return (
    <article className={styles.tags}>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </article>
  );
}
