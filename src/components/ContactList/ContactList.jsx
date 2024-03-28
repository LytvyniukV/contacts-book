import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/contactsSelectors';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <section>
      <ul className={css.list}>
        {contacts.map(contact => {
          return (
            <li className={css.item} key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
