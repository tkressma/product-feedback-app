import styles from "./Create.module.css";
import Heading from "../UI/Heading/Heading";
import Form from "../UI/Forms/Form/Form";
import FormTextInput from "../UI/Forms/FormTextInput/FormTextInput";
import createIcon from "../../assets/shared/icon-new-feedback.svg";
import Button from "../UI/Button/Button";
export default function Create() {
  return (
    <Form icon={createIcon} backButtonDestination="/">
      <Heading type="h1">Create New Feedback</Heading>

      <form>
        <FormTextInput
          inputId="title"
          type="normal"
          labelHeading="Feedback Title"
          labelCaption="Add a short, descriptive headline"
        />
        <FormTextInput
          inputId="title"
          type="large"
          labelHeading="Feedback Detail"
          labelCaption="Include any specific comments on what should be improved, added, etc."
        />
      </form>

      <Button type="violet">Add Feedback</Button>
      <Button type="navy-blue" link={true} destination="/">
        Cancel
      </Button>
    </Form>
  );
}
