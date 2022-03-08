import React, { useState } from "react";
import styles from "./Auth.module.css";
import Form from "../UI/Forms/Form/Form";
import Heading from "../UI/Heading/Heading";
import FormTextInput from "../UI/Forms/FormTextInput/FormTextInput";
import addIcon from "../../assets/shared/icon-new-feedback.svg";
import Button from "../UI/Button/Button";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(false);
  const heading = isSignup ? "Create An Account" : "Sign In";
  const formChangeBtnText = isSignup ? "Already a user?" : "Create An Account";
  const formSubmitBtnText = isSignup ? "Create Account" : "Sign In";
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
    } catch (error) {
      console.log(error.message);
    }
  };
  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try again later.");
  };

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
          <GoogleLogin
            clientId="362804978157-o8ctp5ppr0kdu9a42h90rv8asg3d1eu2.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                style="blue"
                text="Sign in with Google"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              />
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
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
