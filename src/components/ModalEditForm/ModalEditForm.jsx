import EditForm from '../EditForm/EditForm';
import ReactModal from 'react-modal';
import css from './ModalEditForm.module.css';
ReactModal.setAppElement('body');

export default function ModalEditForm({ contact, isModal, onClose }) {
  return (
    <ReactModal
      isOpen={isModal}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <EditForm contact={contact} onCloseModal={onClose} />
    </ReactModal>
  );
}
