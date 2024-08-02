import css from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.item}>
      <div>
        <p>
          <IoPersonSharp className={css.icon} size={12} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} size={12} />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={handleSubmit}>
        Delete
      </button>
    </div>
  );
}
