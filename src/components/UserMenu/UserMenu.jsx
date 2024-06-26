import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={css.wrap}>
      <p className={css.text}>Welcome, {user.name}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
}
