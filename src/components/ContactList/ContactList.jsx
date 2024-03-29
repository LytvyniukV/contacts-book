import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Notification from '../Notification/Notification';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <section>
      {contacts.length ? (
        <ul className={css.list}>
          {contacts.map(contact => {
            return (
              <li className={css.item} key={contact.id}>
                <Contact contact={contact} />
              </li>
            );
          })}
        </ul>
      ) : (
        <Notification>We did not find any contacts by this search</Notification>
      )}
    </section>
  );
}
