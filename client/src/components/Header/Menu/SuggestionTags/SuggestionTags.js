import styles from "./SuggestionTags.module.css";
import Tag from "../../../UI/Tag/Tag";
export default function SuggestionTags() {
  const categories = ["all", "ui", "ux", "enhancement", "bug", "feature"];
  return (
    <article className={styles.tags}>
      {categories.map((category, index) => (
        <Tag key={index} category={category} />
      ))}
    </article>
  );
}
