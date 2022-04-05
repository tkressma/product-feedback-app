import React from "react";
import styles from "./RoadmapCard.module.css";
import Moment from "react-moment";
import UpvoteButton from "../../Home/Main/SuggestionsFeed/Suggestion/UpvoteButton/UpvoteButton";
import CommentLink from "../../Home/Main/SuggestionsFeed/Suggestion/CommentLink/CommentLink";
import Heading from "../../UI/Heading/Heading";
import TextBody from "../../UI/TextBody/TextBody";
import Tag from "../../UI/Tag/Tag";

export const RoadmapCard = ({
  title,
  _id,
  name,
  upvotes,
  comments,
  username,
  createdAt,
  description,
  category,
  status,
}) => {
  // Determines the color of the border depending on roadmap status
  let cardStyle = styles[`suggestion--${status.toLowerCase()}`];

  return (
    <article className={`${styles.suggestion} ${cardStyle}`}>
      <UpvoteButton upvotes={upvotes} id={_id} />

      {/* Suggestion title, description, and tag */}
      <section className={styles["suggestion__info"]}>
        <div className={styles["suggestion__header"]}>
          <Heading
            type="h3"
            link={true}
            destination={`/view-suggestion/${_id}`}
          >
            {title}
          </Heading>

          <TextBody type="b1">
            {name}
            <span className={styles["suggestion__username"]}>@{username}</span>
          </TextBody>

          <TextBody type="b2">
            <Moment format="MM/DD/YYYY" date={createdAt} />
          </TextBody>
        </div>

        <p className={styles["suggestion__description"]}>{description}</p>
        <Tag category={category} />
      </section>

      <CommentLink comments={comments} id={_id} />
    </article>
  );
};
