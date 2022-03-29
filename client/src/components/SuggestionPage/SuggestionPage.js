import React, { useEffect } from "react";
import styles from "./SuggestionPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import BackButton from "../UI/BackButton/BackButton";
import Suggestion from "../Home/Main/SuggestionsFeed/Suggestion/Suggestion";
import CommentSection from "./CommentSection/CommentSection";
import { getSuggestion } from "../../actions/suggestions";
export default function SuggestionPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // Retrieve suggestion being requested via params id
  useEffect(() => dispatch(getSuggestion(id)), []);

  const { suggestion, isLoading } = useSelector((state) => state.suggestions);

  return (
    <main className={styles["suggestion_page"]}>
      <BackButton destination="/" />
      {!isLoading && suggestion && (
        <>
          <Suggestion suggestionData={suggestion} />
          <CommentSection commentData={suggestion.comments} />
        </>
      )}
    </main>
  );
}
