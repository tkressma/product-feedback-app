import styles from "./Header.module.css";
import { useMediaQuery } from "react-responsive";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
export default function ControlCenter() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className={styles.header}>
      <Logo />
      {isMobile && "X"}
      <Menu />
    </header>
  );
}
//  https://aastudio.fr/Sidebar-and-Aside-are-different.html#:~:text=is%20an%20HTML5%20tag,of%20the%20content%20they%20carry.
// https://codepen.io/rustyrobison/pen/RqapaE
