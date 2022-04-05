import styles from "./Menu.module.css";
import SuggestionTags from "./SuggestionTags/SuggestionTags";
import ProjectRoadmap from "./ProjectRoadmap/ProjectRoadmap";
import LogoutButton from "../../../UI/LogoutButton/LogoutButton";

export default function Menu({ isOpen, closeMobileMenu }) {
  // Check if the user is logged in. Display Logout button if that is the case.
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <section
      className={`${styles.menu} ${isOpen && styles["menu--active"]}`}
      id="menu"
    >
      {/* If the mobile menu is open, display a back drop */}
      {isOpen && (
        <div className={styles["menu--backdrop"]} onClick={closeMobileMenu} />
      )}
      {/* If the mobile menu is open, send a function to category tags that
          will close the mobile menu when clicked. Else, send nothing. I did
          this so that the closeMobileMenu function wasn't constantly called
          when not on a mobile device.*/}
      <SuggestionTags closeMobileMenu={isOpen ? closeMobileMenu : null} />
      <ProjectRoadmap />
      {isOpen && user && <LogoutButton />}
    </section>
  );
}
