import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.contactWrap}>
        <p className={css.text}>
          <FaUser className={css.icon} size={15} /> {name}
        </p>
        <p className={css.number}>
          <FaPhone className={css.icon} size={15} /> {number}
        </p>
      </div>

      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </>
  );
};
