import styles from "./Create.module.css";
import Heading from "../UI/Heading/Heading";
import Form from "../UI/Forms/Form/Form";
import FormTextInput from "../UI/Forms/FormTextInput/FormTextInput";
import FormSelectInput from "../UI/Forms/FormSelectInput/FormSelectInput";
import createIcon from "../../assets/shared/icon-new-feedback.svg";
import Button from "../UI/Button/Button";
export default function Create() {
  return (
    <Form icon={createIcon} backButtonDestination="/">
      <Heading type="h1">Create New Feedback</Heading>

      <form>
        <FormTextInput
          inputId="title"
          labelHeading="Feedback Title"
          labelCaption="Add a short, descriptive headline"
        />
        <FormTextInput
          inputId="detail"
          large="true"
          labelHeading="Feedback Detail"
          labelCaption="Include any specific comments on what should be improved, added, etc."
        />
        <FormSelectInput
          inputId="category"
          labelHeading="Category"
          labelCaption="Choose a category for your feedback"
        />
      </form>

      <Button type="violet">Add Feedback</Button>
      <Button type="navy-blue" link={true} destination="/">
        Cancel
      </Button>
    </Form>
  );
}
