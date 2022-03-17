import React, { useEffect } from "react";
import styles from "./SuggestionPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BackButton from "../UI/BackButton/BackButton";
import Suggestion from "../Home/Main/SuggestionsFeed/Suggestion/Suggestion";
import { getSuggestion } from "../../actions/suggestions";
import Comments from "./Comments/Comments";
export default function SuggestionPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Retrieve the suggestion that is being edited
  useEffect(() => {
    dispatch(getSuggestion(id));
  }, [id]);

  // Retrieve the data for the suggestion being viewed
  const { suggestion, isLoading } = useSelector((state) => state.suggestions);

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
