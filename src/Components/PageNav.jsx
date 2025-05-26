import { NavLink, Link } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

// we use NavLink instead of Link so when we visit a page we know that we did => it takes a class active u can style it
function PageNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo />
      </Link>

      <ul>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
