import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function AuthNav() {
  return (
    <div className={css.nav}>
      <NavLink className={buildLinkClass} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
