import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import Modal from '../Modal/Modal';
import { IoMdMail } from 'react-icons/io';
import { useState } from 'react';
import EditForm from '../EditForm/EditForm';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete';

export default function Contact({ contact }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
        <button
          className={css.button}
          type="button"
          onClick={() => setIsDeleting(true)}
        >
          Delete
        </button>
      </div>
      <Modal onClose={setIsEditing} isModal={isEditing}>
        <EditForm contact={contact} onCloseModal={setIsEditing} />
      </Modal>
      <Modal onClose={setIsDeleting} isModal={isDeleting}>
        <ConfirmDelete contact={contact} onCloseModal={setIsDeleting} />
      </Modal>
    </>
  );
}
