import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return visibleContacts.length > 0 ? (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  ) : (
    <p>not found</p>
  );
}
