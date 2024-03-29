import { useSelector } from 'react-redux';
import css from './UserHomeInterface.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';
export default function UserHomeInterface() {
  const user = useSelector(selectUser);
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.content}>
          <h2 className={css.title}>One place for all your contacts</h2>
          <p className={css.text}>Hello, {user.name}!</p>
          <p className={css.text}>
            Now you can manage your conacts and access them from any of your
            device
          </p>
          <Link to="/contacts" className={css.link}>
            Get started
          </Link>
        </div>
        <div className={css.imgWrap}>
          <img
            src="/man.png"
            alt="man"
            width={300}
            className={css.imgPhonebook}
          />
          <img
            src="/lady.png"
            alt="lady "
            width={300}
            className={css.imgLady}
          />
        </div>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <img src="/children.png" alt="children" width={400} />
        </li>
        <li className={css.item}>
          <img src="/people.png" alt="people" width={400} />
        </li>
        <li className={css.item}>
          <img src="/oldPeople.png" alt="old people" width={400} />
        </li>
      </ul>
    </>
  );
}
