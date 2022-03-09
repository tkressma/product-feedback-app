import React from "react";
import styles from "./LogoutButton.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <button className={styles.logout} onClick={logout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
