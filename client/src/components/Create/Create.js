import styles from "./Create.module.css";
import Heading from "../UI/Heading/Heading";
import FormCard from "../UI/Heading/FormCard/FormCard";
import createIcon from "../../assets/shared/icon-new-feedback.svg";
export default function Create() {
  return (
    <FormCard icon={createIcon} backButtonDestination="/">
      <Heading type="h1">Create New Feedback</Heading>
    </FormCard>
  );
}
