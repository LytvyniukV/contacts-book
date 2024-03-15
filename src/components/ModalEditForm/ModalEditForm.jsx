import { useDispatch, useSelector } from 'react-redux';
import { selectModal, toggleModal } from '../../redux/modalSlice';
import { EditForm } from '../EditForm/EditForm';
import ReactModal from 'react-modal';
import css from './ModalEditForm.module.css';
ReactModal.setAppElement('body');

export default function ModalEditForm() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectModal);
  console.log(modalIsOpen);
  const closeModal = () => dispatch(toggleModal(false));
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <EditForm />
    </ReactModal>
  );
}
