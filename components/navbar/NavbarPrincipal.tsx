import styles from "./NavbarPrincipal.module.css";

const NavbarPrincipal: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default NavbarPrincipal;
