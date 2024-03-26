import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
export default function AuthNav() {
  return (
    <div className={css.nav}>
      <NavLink className={css.link} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
