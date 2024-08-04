import { useSelector } from 'react-redux';
import clsx from 'clsx';
import styles from './Navigation.module.css';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

const navLinkCss = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={navLinkCss}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={navLinkCss}>
          Tasks
        </NavLink>
      )}
    </nav>
  );
}
