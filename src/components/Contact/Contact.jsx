import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import ModalEditForm from '../ModalEditForm/ModalEditForm';
import { IoMdMail } from 'react-icons/io';
import { useState } from 'react';
import { deleteContact } from '../../redux/contactsOps';
import toast from 'react-hot-toast';
export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const onClick = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => {
        toast.success('Contact was successfully deleted');
      });
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
        <button
          className={css.button}
          type="button"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button className={css.button} type="button" onClick={onClick}>
          Delete
        </button>
      </div>
      <ModalEditForm
        contact={contact}
        onClose={setIsEditing}
        isModal={isEditing}
      />
    </>
  );
}
