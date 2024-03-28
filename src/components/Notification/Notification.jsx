import css from './Notification.module.css';

export default function Notification({ children }) {
  return (
    <div className={css.container}>
      <p className={css.text}>{children}</p>
    </div>
  );
}
