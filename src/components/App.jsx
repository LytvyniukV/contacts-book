import { SearchBox } from './SearchBox/SearchBox';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Notification } from './Notification/Notification';
import { Title } from './Title/Title';
import { useSelector } from 'react-redux';

function App() {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <>
      <Title />
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 ? <ContactList /> : <Notification />}
    </>
  );
}

export default App;
