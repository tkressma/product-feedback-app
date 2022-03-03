import styles from "./Create.module.css";
import Heading from "../UI/Heading/Heading";
import Form from "../UI/Forms/Form/Form";
import createIcon from "../../assets/shared/icon-new-feedback.svg";
import Button from "../UI/Button/Button";
export default function Create() {
  return (
    <Form icon={createIcon} backButtonDestination="/">
      <Heading type="h1">Create New Feedback</Heading>
    </Form>
  );
}
