import { useSelector } from 'react-redux';

import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return visibleContacts.length > 0 ? (
    <ul className={styles.list}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  ) : (
    <p>not found</p>
  );
}
