import ContactList from '../components/ContactList/ContactList';
import FormsWrapper from '../components/FormsWrapper/FormsWrapper';
import Notification from '../components/Notification/Notification';
import Title from '../components/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';
import { selectContacts, selectIsLoading } from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import toast from 'react-hot-toast';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts()).catch(() =>
      toast.error(
        'Whoops, something went wrong! Please try reloading this page!'
      )
    );
  }, [dispatch]);

  return (
    <main>
      <Title />
      <FormsWrapper />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Notification>
          There are no contacts in your phonebook. Please add your first
          contact!
        </Notification>
      )}
      {isLoading && <Loader />}
    </main>
  );
}
