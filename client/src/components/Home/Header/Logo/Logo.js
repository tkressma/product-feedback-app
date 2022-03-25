import { useState, useEffect } from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import decode from "jwt-decode";
import LogoutButton from "../../../UI/LogoutButton/LogoutButton";
import { useDispatch } from "react-redux";
export default function Logo() {
  // Retrieve the user from localStorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    const token = user?.token;

    // If the token has expired (1hr), logout
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className={styles.logo}>
      <div className={styles["logo__text_container"]}>
        <h1 className={styles.h1}>Frontend Mentor</h1>
        <p className={styles.p}>Feedback Board</p>
      </div>

      {user ? (
        <div className={styles["logo__user_controls"]}>
          <p className={styles.p}>Welcome, {user.result.givenName}.</p>
          {!isMobile && <LogoutButton />}
        </div>
      ) : (
        <Link
          to="/auth"
          className={`${styles.p} ${styles["logo__login_link"]}`}
        >
          Login
        </Link>
      )}
    </div>
  );
}
