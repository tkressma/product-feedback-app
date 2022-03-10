import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSuggestion } from "../../actions/suggestions";
import styles from "./Create.module.css";
import Heading from "../UI/Heading/Heading";
import Form from "../UI/Forms/Form/Form";
import FormTextInput from "../UI/Forms/FormTextInput/FormTextInput";
import FormSelectInput from "../UI/Forms/FormSelectInput/FormSelectInput";
import createIcon from "../../assets/shared/icon-new-feedback.svg";
import Button from "../UI/Button/Button";
import checkIcon from "../../assets/shared/icon-check.svg";

import { SpinnerCircularFixed } from "spinners-react";

export default function Create() {
  const [newSuggestion, setNewSuggestion] = useState({
    title: "",
    category: "Feature",
    status: "suggestion",
    description: "",
    upvotes: [],
    comments: [],
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.suggestions);
  const [submitted, setSubmitted] = useState(false); // Did the user submit the form?
  const user = JSON.parse(localStorage.getItem("profile"));

  // If a user is not logged in upon trying to access this form,
  // redirect them to sign in/sign up.
  useEffect(() => {
    if (!user?.result?.name) {
      navigate("/auth");
    }
  });

  // Displays a loading circle if the api call is still processing.
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

  // After the feedback is added, wait 1.5 seconds before redirecting
  // back to the home page.
  useEffect(() => {
    if ((!isLoading, submitted)) {
      let timerFunc = setTimeout(() => navigate("/"), 1500);
      return () => clearTimeout(timerFunc);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    dispatch(
      createSuggestion({
        ...newSuggestion,
        category: newSuggestion.category.toLowerCase(), // Category field must be lowercase before being added to the database.
        name: user?.result?.name, // Add full name to suggestion data
        username: user?.result?.username, // Add username to suggestion data
      })
    );
  };

  return (
    <Form icon={createIcon} backButtonDestination="/">
      <Heading type="h1">Create New Feedback</Heading>

      <form id="form">
        <FormTextInput
          inputId="title"
          value={newSuggestion.title}
          labelHeading="Feedback Title"
          labelCaption="Add a short, descriptive headline"
          onChange={(event) =>
            setNewSuggestion({ ...newSuggestion, title: event.target.value })
          }
        />
        <FormSelectInput
          inputId="category"
          value={newSuggestion.category}
          labelHeading="Category"
          labelCaption="Choose a category for your feedback"
          onChange={(event) =>
            setNewSuggestion({
              ...newSuggestion,
              category: event.target.value,
            })
          }
        />
        <FormTextInput
          inputId="detail"
          value={newSuggestion.description}
          large="true"
          labelHeading="Feedback Detail"
          labelCaption="Include any specific comments on what should be improved, added, etc."
          onChange={(event) =>
            setNewSuggestion({
              ...newSuggestion,
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
                text="Add Feedback"
                form="form"
                onClick={handleSubmit}
              />

              <Button
                btnStyle="navy-blue"
                text="Cancel"
                onClick={handleSubmit}
                link={true}
                destination="/"
              />
            </>
          )}
        </div>
      </form>
    </Form>
  );
}
