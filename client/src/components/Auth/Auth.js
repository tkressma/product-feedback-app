import React, { useState } from "react";
import styles from "./Auth.module.css";
import Form from "../UI/Forms/Form/Form";
import Heading from "../UI/Heading/Heading";
import FormTextInput from "../UI/Forms/FormTextInput/FormTextInput";
import addIcon from "../../assets/shared/icon-new-feedback.svg";
import Button from "../UI/Button/Button";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../actions/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const heading = isSignup ? "Create An Account" : "Sign In";
  const formChangeBtnText = isSignup ? "Already a user?" : "Create An Account";
  const formSubmitBtnText = isSignup ? "Create Account" : "Sign In";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  // Update the form data state based on what input field is being used
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      // Redirect to homepage
      navigate("/");
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
          <div className={styles["fullname__container"]}>
            <div className={styles["inputlabel__container"]}>
              <FormTextInput
                inputId="firstName"
                value={formData.firstName}
                labelHeading="First Name"
                onChange={handleChange}
              />
            </div>

            <div className={styles["inputlabel__container"]}>
              <FormTextInput
                inputId="lastname"
                value={formData.lastname}
                labelHeading="Last Name"
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {isSignup && (
          <FormTextInput
            inputId="username"
            value={formData.username}
            labelHeading="Username"
            onChange={handleChange}
          />
        )}

        <FormTextInput
          inputId="email"
          value={formData.email}
          labelHeading="Email Address"
          onChange={handleChange}
        />

        <FormTextInput
          inputId="password"
          value={formData.password}
          labelHeading="Password"
          type="password"
          labelCaption={isSignup && "Password must be at least 8 characters"}
          onChange={handleChange}
        />
        {isSignup && (
          <FormTextInput
            inputId="confirmPassword"
            value={formData.confirmPassword}
            labelHeading="Repeat Password"
            type="password"
            onChange={handleChange}
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
                text="Google Sign In"
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
