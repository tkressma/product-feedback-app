import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSuggestion,
  updateSuggestion,
  deleteSuggestion,
} from "../../actions/suggestions";
import styles from "./Edit.module.css";
import Heading from "../UI/Heading/Heading";
import Form from "../UI/Forms/Form/Form";
import FormTextInput from "../UI/Forms/FormTextInput/FormTextInput";
import FormSelectInput from "../UI/Forms/FormSelectInput/FormSelectInput";
import editIcon from "../../assets/shared/icon-edit-feedback.svg";
import Button from "../UI/Button/Button";
import checkIcon from "../../assets/shared/icon-check.svg";

import { SpinnerCircularFixed } from "spinners-react";

export default function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  // Retrieve the data for the suggestion being edited
  const { suggestion, isLoading } = useSelector((state) => state.suggestions);
  // Did the user submit the form?
  const [submitted, setSubmitted] = useState(false);
  // A base state placeholder object for editing a form.
  const [updatedSuggestion, setUpdatedSuggestion] = useState({
    title: "",
    category: "",
    description: "",
  });

  // If a user is not logged in upon trying to access this form,
  // redirect them to sign in/sign up.
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    if (!user?.result?.name) {
      navigate("/auth");
    }
  });

  // Retrieve the suggestion that is being edited
  useEffect(() => {
    dispatch(getSuggestion(id));
  }, [id]);

  // Update the suggestion information being displayed in
  // the editing form based on the dispatch redux state change
  useEffect(() => {
    setUpdatedSuggestion((prevState) => ({
      ...prevState,
      title: suggestion?.title,
      category: suggestion?.category,
      description: suggestion?.description,
    }));
  }, [suggestion]);

  // Displays a loading circle if the form submission is still processing in the back end.
  // Once finished, it will display a check mark.
  const submissionConfirmation = isLoading ? (
    <SpinnerCircularFixed
      color="hsl(230, 76%, 59%)"
      secondaryColor="#f2f5ff"
      style={{ height: 43.98, margin: "0 auto" }}
    />
  ) : (
    <img
      src={checkIcon}
      className={styles["loading--check"]}
      alt="Checkmark - action is completed"
    />
  );

  // Displays a loading circle if the suggestion data from the back end is still being retrieved.
  const loadingSuggestionInfo = (
    <SpinnerCircularFixed
      color="hsl(230,76%,59%)"
      secondaryColor="#f2f5ff"
      style={{ maxHeight: "35px" }}
    />
  );

  // After the form is submitted, wait 1.5 seconds before redirecting
  // back to the previous page.
  useEffect(() => {
    if (!isLoading && submitted) {
      let timerFunc = setTimeout(() => navigate(-1), 1500);
      return () => clearTimeout(timerFunc);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    dispatch(updateSuggestion(id, updatedSuggestion));
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setSubmitted(true);
    dispatch(deleteSuggestion(id));
  };

  return (
    <Form icon={editIcon}>
      <Heading type="h1">
        Edit Your Feedback {isLoading && !submitted && loadingSuggestionInfo}
      </Heading>

      <form id="form">
        <FormTextInput
          inputId="title"
          value={isLoading && !submitted ? "" : updatedSuggestion.title}
          labelHeading="Feedback Title"
          labelCaption="Add a short, descriptive headline"
          onChange={(event) =>
            setUpdatedSuggestion({
              ...updatedSuggestion,
              title: event.target.value,
            })
          }
        />
        <FormSelectInput
          inputId="category"
          value={
            isLoading && !submitted ? "Featured" : updatedSuggestion.category
          }
          labelHeading="Category"
          labelCaption="Choose a category for your feedback"
          onChange={(event) =>
            setUpdatedSuggestion({
              ...updatedSuggestion,
              category: event.target.value,
            })
          }
        />
        <FormTextInput
          inputId="detail"
          value={isLoading && !submitted ? "" : updatedSuggestion.description}
          large="true"
          labelHeading="Feedback Detail"
          labelCaption="Include any specific comments on what should be improved, added, etc."
          onChange={(event) =>
            setUpdatedSuggestion({
              ...updatedSuggestion,
              description: event.target.value,
            })
          }
        />

        <div className={styles["button__container"]}>
          {submitted ? (
            submissionConfirmation
          ) : (
            <>
              <Button
                btnStyle="violet"
                text="Submit Changes"
                form="form"
                onClick={handleSubmit}
              />

              <Button
                btnStyle="navy-blue"
                text="Cancel"
                onClick={handleSubmit}
                link={true}
                destination={-1}
              />

              <Button btnStyle="red" text="Delete" onClick={handleDelete} />
            </>
          )}
        </div>
      </form>
    </Form>
  );
}
