import { FaPlusCircle } from 'react-icons/fa';
import css from './AddFieldButton.module.css';
export default function AddFieldButton({ children, onClick }) {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
      <FaPlusCircle size={20} className={css.icon} />
      {children}
    </button>
  );
}
