import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import Loader from '../Loader/Loader';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function App() {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ margin: ' 10px' }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <ContactList />
    </div>
  );
}
