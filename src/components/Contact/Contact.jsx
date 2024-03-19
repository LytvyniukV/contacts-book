import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact, setId } from '../../redux/contactsSlice';

import { toggleModal } from '../../redux/modalSlice';
import { IoMdMail } from 'react-icons/io';
export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const openEditing = () => {
    dispatch(setId(contact.id));
    dispatch(toggleModal(true));
  };
  return (
    <>
      <div className={css.contactWrap}>
        <p className={css.text}>
          <FaUser className={css.icon} size={15} /> {contact.name}
        </p>
        <a href={`tel: ${contact.number}`} className={css.number}>
          <FaPhone className={css.icon} size={15} /> {contact.number}
        </a>
        {contact.email && (
          <a href={`mailto: ${contact.email}`} className={css.email}>
            <IoMdMail className={css.icon} size={20} />
            {contact.email}
          </a>
        )}
      </div>
      <div className={css.btnWrap}>
        <button className={css.button} type="button" onClick={openEditing}>
          Edit
        </button>
        <button
          className={css.button}
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </button>
      </div>
    </>
  );
}
