import ContactList from '../components/ContactList/ContactList';
import FormsWrapper from '../components/FormsWrapper/FormsWrapper';
import Notification from '../components/Notification/Notification';
import Title from '../components/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contacts/contactsSelectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/contactsOps';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <main>
      <Title />
      <FormsWrapper />
      {contacts.length > 0 ? <ContactList /> : <Notification />}
      {isLoading && !error && <Loader />}
      {error && <ErrorMessage />}
    </main>
  );
}
