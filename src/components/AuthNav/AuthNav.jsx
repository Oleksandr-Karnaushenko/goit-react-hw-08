import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/register">
        <button className={styles.button} type="button">
          Register
        </button>
      </NavLink>
      <NavLink to="/login">
        <button type="button">Login</button>
      </NavLink>
    </nav>
  );
}
