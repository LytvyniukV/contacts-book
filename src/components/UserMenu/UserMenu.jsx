import { useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/authSelectors';
export default function UserMenu() {
  const user = useSelector(selectUser);
  return (
    <div className={css.wrap}>
      <p>Welcome, {user.name}</p>
      <button type="button">Logout</button>
    </div>
  );
}
