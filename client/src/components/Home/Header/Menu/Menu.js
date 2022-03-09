import styles from "./Menu.module.css";
import { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import SuggestionTags from "./SuggestionTags/SuggestionTags";
import ProjectRoadmap from "./ProjectRoadmap/ProjectRoadmap";
import LogoutButton from "../../../UI/LogoutButton/LogoutButton";
let test = document.querySelector("body");

export default function Menu({ isOpen, closeMobileMenu }) {
  // Check if the user is logged in. Display Logout button if that is the case.
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  // Disable scrolling if the menu is opened
  if (isOpen) {
    disableBodyScroll(test);
  } else {
    enableBodyScroll(test);
  }

  return (
    <section
      className={`${styles.menu} ${isOpen && styles["menu--active"]}`}
      id="menu"
    >
      {/* If the mobile menu is open, display a back drop */}
      {isOpen && (
        <div className={styles["menu--backdrop"]} onClick={closeMobileMenu} />
      )}
      <SuggestionTags />
      <ProjectRoadmap />

      {isOpen && user && <LogoutButton />}
    </section>
  );
}
