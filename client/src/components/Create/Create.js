import { useEffect, useState } from "react";
import styles from "./Create.module.css";
import Heading from "../UI/Heading/Heading";
import Form from "../UI/Forms/Form/Form";
import FormTextInput from "../UI/Forms/FormTextInput/FormTextInput";
import FormSelectInput from "../UI/Forms/FormSelectInput/FormSelectInput";
import createIcon from "../../assets/shared/icon-new-feedback.svg";
import Button from "../UI/Button/Button";
export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Feature");

  useEffect(() => {
    console.log(title, description, category);
  }, [title, description, category]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userFeedback = {
      title: title,
      category: category,
      upvotes: 0,
      status: "suggestion",
      description: description,
      comments: [],
    };
    console.log(userFeedback);
  };

  return (
    <Form icon={createIcon} backButtonDestination="/">
      <Heading type="h1">Create New Feedback</Heading>

      <form id="form">
        <FormTextInput
          inputId="title"
          value={title}
          labelHeading="Feedback Title"
          labelCaption="Add a short, descriptive headline"
          onChange={(event) => setTitle(event.target.value)}
        />
        <FormSelectInput
          inputId="category"
          value={category}
          labelHeading="Category"
          labelCaption="Choose a category for your feedback"
          onChange={(event) => setCategory(event.target.value)}
        />
        <FormTextInput
          inputId="detail"
          value={description}
          large="true"
          labelHeading="Feedback Detail"
          labelCaption="Include any specific comments on what should be improved, added, etc."
          onChange={(event) => setDescription(event.target.value)}
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
