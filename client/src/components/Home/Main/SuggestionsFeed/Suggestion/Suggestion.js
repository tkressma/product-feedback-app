import styles from "./Suggestion.module.css";
import Tag from "../../../../UI/Tag/Tag";
import UpvoteButton from "./UpvoteButton/UpvoteButton";
import CommentLink from "./CommentLink/CommentLink";
import Heading from "../../../../UI/Heading/Heading";
import TextBody from "../../../../UI/TextBody/TextBody";
import editIcon from "../../../../../assets/shared/icon-edit-feedback-pen.svg";
import deleteIcon from "../../../../../assets/shared/icon-delete.svg";
import { useNavigate } from "react-router-dom";
export default function Suggestion({ suggestionData }) {
  // Destructuring props
  const { title, description, category, upvotes, comments, creator, _id } =
    suggestionData;

  const user = JSON.parse(localStorage.getItem("profile"));

  const navigate = useNavigate();

  return (
    <article className={styles.suggestion}>
      <UpvoteButton upvotes={upvotes} id={_id} />

      {/* Suggestion title, description, and tag */}
      <section className={styles["suggestion__info"]}>
        <Heading type="h3" link={true} destination="/">
          {title}
        </Heading>
        <TextBody type="b1">{description}</TextBody>
        <Tag
          // Properly capitalize the category names
          category={
            category === "ux" || category === "ui"
              ? category.toUpperCase()
              : category.charAt(0).toUpperCase() + category.slice(1)
          }
        />
      </section>

      {/* If the user is the creator of the suggestion, display the edit and delete options */}
      {(user?.result?.googleId === creator ||
        user?.result?._id === creator) && (
        <div className={styles["suggestion__creator_settings"]}>
          <button
            className={styles["suggestion__creator_settings_btn"]}
            onClick={(e) => {
              e.preventDefault();
              navigate("/edit");
            }}
            aria-label="Edit suggestion"
          >
            <img
              src={editIcon}
              className={styles["suggestion__edit_icon"]}
              alt="A pen suggesting editing"
            />
          </button>
          <button
            className={styles["suggestion__creator_settings_btn"]}
            onClick={(e) => {
              e.preventDefault();
              navigate("/edit");
            }}
            aria-label="Delete suggestion"
          >
            <img
              src={deleteIcon}
              className={styles["suggestion__delete_icon"]}
              alt="A trash can suggestion deletion."
            />
          </button>
        </div>
      )}

      <CommentLink comments={comments} />
    </article>
  );
}
