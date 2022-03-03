import { useEffect, useState } from "react";
import styles from "./Create.module.css";
import Heading from "../UI/Heading/Heading";
import Form from "../UI/Forms/Form/Form";
import FormTextInput from "../UI/Forms/FormTextInput/FormTextInput";
import FormSelectInput from "../UI/Forms/FormSelectInput/FormSelectInput";
import createIcon from "../../assets/shared/icon-new-feedback.svg";
import Button from "../UI/Button/Button";
export default function Create() {
  const [newSuggestion, setNewSuggestion] = useState({
    title: "",
    category: "Feature",
    upvotes: 0,
    status: "suggestion",
    description: "",
    comments: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newSuggestion);
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
            setNewSuggestion({ ...newSuggestion, category: event.target.value })
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
          <Button
            style="violet"
            text="Add Feedback"
            form="form"
            onClick={handleSubmit}
          />

          <Button
            style="navy-blue"
            text="Cancel"
            onClick={handleSubmit}
            link={true}
            destination="/"
          />
        </div>
      </form>
    </Form>
  );
}
