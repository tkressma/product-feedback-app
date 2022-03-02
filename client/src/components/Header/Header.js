import { useState } from "react";
import styles from "./Header.module.css";
import { useMediaQuery } from "react-responsive";
import { Spin as Hamburger } from "hamburger-react";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
export default function ControlCenter() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Logo />
      {isMobile && (
        <Hamburger
          color="#ffffff"
          duration={0.3}
          size={20}
          label="Show menu"
          aria-expanded={isOpen}
          aria-controls="menu"
          distance="lg"
          toggled={isOpen}
          toggle={setIsOpen}
        />
      )}
      <Menu
        isOpen={isMobile && isOpen}
        // Allow the mobile menu to close when the backdrop is clicked on.
        closeMobileMenu={() => setIsOpen(false)}
      />
    </header>
  );
}
//  https://aastudio.fr/Sidebar-and-Aside-are-different.html#:~:text=is%20an%20HTML5%20tag,of%20the%20content%20they%20carry.
// https://codepen.io/rustyrobison/pen/RqapaE
