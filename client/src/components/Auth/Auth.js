import React, { useState } from "react";
import styles from "./Auth.module.css";
import Form from "../UI/Forms/Form/Form";
import Heading from "../UI/Heading/Heading";
import FormTextInput from "../UI/Forms/FormTextInput/FormTextInput";
import addIcon from "../../assets/shared/icon-new-feedback.svg";
import Button from "../UI/Button/Button";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  const heading = isSignup ? "Create An Account" : "Sign In";
  const formChangeBtnText = isSignup ? "Already a user?" : "Create An Account";
  const formSubmitBtnText = isSignup ? "Create Account" : "Sign In";

  return (
    <Form icon={addIcon} backButtonDestination="/">
      <Heading type="h1">{heading}</Heading>

      <form id="create-user">
        {isSignup && (
          <FormTextInput
            inputId="username"
            value={newUser.username}
            labelHeading="Username"
            onChange={(event) =>
              setNewUser({ ...newUser, username: event.target.value })
            }
          />
        )}
        <FormTextInput
          inputId="email"
          value={newUser.email}
          labelHeading="Email Address"
          onChange={(event) =>
            setNewUser({ ...newUser, email: event.target.value })
          }
        />
        <FormTextInput
          inputId="password"
          value={newUser.password}
          labelHeading="Password"
          labelCaption={isSignup && "Password must be at least 8 characters"}
          onChange={(event) =>
            setNewUser({ ...newUser, password: event.target.value })
          }
        />
        {isSignup && (
          <FormTextInput
            inputId="repassword"
            value={newUser.repassword}
            labelHeading="Repeat Password"
            onChange={(event) =>
              setNewUser({ ...newUser, repassword: event.target.value })
            }
          />
        )}

        <div className={styles["button__container"]}>
          <Button
            style="violet"
            text={formSubmitBtnText}
            form="create-user"
            onClick={handleSubmit}
          />
          <Button
            style="transparent"
            text={formChangeBtnText}
            onClick={(e) => {
              e.preventDefault();
              setIsSignup(!isSignup);
            }}
          />
        </div>
      </form>
    </Form>
  );
};

export default Auth;
