import css from './Instructions.module.css';
export default function Instructions() {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <p className={css.text}>Simple form to add new contact</p>
        <img src="../../../public/form.png" alt="form" width={400} />
      </li>
      <li className={css.item}>
        <img src="../../../public/filter.png" alt="form" width={400} />
        <p className={css.text}>Comfortable searchbox to find needed contact</p>
      </li>
      <li className={css.item}>
        <p className={css.text}>
          Contact card with buttons to edit and delete your contact
        </p>
        <img src="../../../public/contact.png" alt="form" width={400} />
      </li>
    </ul>
  );
}
