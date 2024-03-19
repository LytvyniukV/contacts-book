import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilter } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
