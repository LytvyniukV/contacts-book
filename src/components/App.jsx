import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Notification from './Notification/Notification';
import Title from './Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { Toaster } from 'react-hot-toast';

function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Title />
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? <ContactList /> : <Notification />}
      {isLoading && !error && <Loader />}
      {error && <ErrorMessage />}
      <Toaster position="top-right" />
    </>
  );
}

export default App;
