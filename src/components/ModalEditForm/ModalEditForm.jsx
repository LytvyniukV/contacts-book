import { useDispatch, useSelector } from 'react-redux';
import { selectModal, toggleModal } from '../../redux/modalSlice';
import { EditForm } from '../EditForm/EditForm';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default function ModalEditForm() {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectModal);
  console.log(modalIsOpen);
  const closeModal = () => dispatch(toggleModal(false));
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      <EditForm />
    </ReactModal>
  );
}
