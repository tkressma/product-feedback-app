import React from "react";
import styles from "./SuggestionPage.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BackButton from "../UI/BackButton/BackButton";
import Suggestion from "../Home/Main/SuggestionsFeed/Suggestion/Suggestion";
import Comments from "./Comments/Comments";
export default function SuggestionPage() {
  const { id } = useParams();

  const { suggestions, isLoading } = useSelector((state) => state.suggestions);
  // Find exact suggestion to be displayed
  const suggestion = suggestions.find((suggestion) => suggestion._id === id);

  return (
    <main className={styles["suggestion_page"]}>
      <BackButton destination="/" />
      {!isLoading && suggestion && (
        <>
          <Suggestion suggestionData={suggestion} />
          <Comments commentData={suggestion.comments} />
        </>
      )}
    </main>
  );
}
