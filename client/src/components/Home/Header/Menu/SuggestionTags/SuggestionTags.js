import styles from "./SuggestionTags.module.css";
import Tag from "../../../../UI/Tag/Tag";
export default function SuggestionTags({ closeMobileMenu }) {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  return (
    <article className={styles.tags}>
      {categories.map((category, index) => (
        <Tag
          key={index}
          category={category}
          closeMobileMenu={closeMobileMenu}
        />
      ))}
    </article>
  );
}
