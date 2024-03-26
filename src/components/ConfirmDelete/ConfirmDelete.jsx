import { useDispatch } from 'react-redux';
import css from './ConfirmDelete.module.css';
import { deleteContact } from '../../redux/contacts/contactsOps';
import toast from 'react-hot-toast';
export default function ConfirmDelete({ onCloseModal, contact }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => {
        toast.success('Contact was successfully deleted');
        onCloseModal(false);
      });
  };
  return (
    <div className={css.wrap}>
      <h2 className={css.title}>
        Are you sure, that you want to{' '}
        <span className={css.accent}>delete</span> contact{' '}
        <span className={css.name}>{contact.name}</span>?
      </h2>
      <ul className={css.list}>
        <li>
          <button className={css.yesBtn} type="button" onClick={onDelete}>
            Yes
          </button>
        </li>
        <li>
          <button
            className={css.noBtn}
            type="button"
            onClick={() => onCloseModal(false)}
          >
            No
          </button>
        </li>
      </ul>
    </div>
  );
}
