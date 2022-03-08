import { useState, useEffect } from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../../UI/Button/Button";
export default function Logo() {
  // Retrieve the user from localStorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    // Check for JWT

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className={styles.logo}>
      <div className={styles["logo__text"]}>
        <h1 className={styles.h1}>Frontend Mentor</h1>
        <p className={styles.p}>Feedback Board</p>
      </div>

      {user ? (
        <div className={styles["logo__user_controls"]}>
          <p className={styles.p}>Welcome, {user.result.givenName}.</p>
          <Button text="Log out" style="logout" onClick={logout} />
        </div>
      ) : (
        <Link to="/auth" className={`${styles.p} ${styles["logo__login"]}`}>
          Login
        </Link>
      )}
    </div>
  );
}
