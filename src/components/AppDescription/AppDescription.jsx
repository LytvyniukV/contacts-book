import { Link } from 'react-router-dom';
import css from './AppDescription.module.css';
export default function AppDescription() {
  return (
    <>
      <p className={css.text}>
        A simple smart contact app to manage your contacts. You can add, delete
        and edit your contacts in suitable for you moment.
      </p>
      <p className={css.text}>
        All your contacts will be saved on server, so you can get access from
        any device, just logining in your accont.
      </p>
      <p className={css.text}>
        Suitable searching by name and number gives you access to any contact by
        writitng a few letters or digits.
      </p>
      <p className={css.text}>
        To start using Contact Book just{' '}
        <Link to="/register" className={css.link}>
          create
        </Link>{' '}
        new account or{' '}
        <Link to="/login" className={css.link}>
          login
        </Link>
        , if you already have one.{' '}
      </p>
    </>
  );
}
