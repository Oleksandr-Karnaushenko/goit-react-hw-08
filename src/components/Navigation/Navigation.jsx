import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

import styles from './Navigation.module.css';

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
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
