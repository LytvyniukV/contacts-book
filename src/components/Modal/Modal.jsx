import ReactModal from 'react-modal';
import css from './Modal.module.css';
ReactModal.setAppElement('body');

export default function Modal({ children, isModal, onClose }) {
  const closeModal = () => {
    onClose(false);
  };
  return (
    <ReactModal
      isOpen={isModal}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      {children}
    </ReactModal>
  );
}
