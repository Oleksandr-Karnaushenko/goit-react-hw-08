import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';

import { changeContact, deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';
import { changeName, changeNumber } from '../../redux/contacts/slice';

export default function Contact({ data: { id, name, number } }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    setIsEditing(!isEditing);
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    dispatch(changeContact({ id, name, number }));
  };
  const handleEdit = e => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };
  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteContact(id));
  };

  const handleChangeName = e => {
    const name = e.target.value;
    dispatch(changeName({ id, name }));
  };
  const handleChangeNumber = e => {
    const number = e.target.value;
    dispatch(changeNumber({ id, number }));
  };

  return (
    <div className={styles.item}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <IoPersonSharp className={styles.icon} size={12} />
          <input
            type="text"
            name="name"
            value={name}
            disabled={!isEditing}
            onChange={handleChangeName}
            // pattern="/^[a-z]{3,8}$/"
          ></input>
        </label>
        <label>
          <FaPhoneAlt className={styles.icon} size={12} />
          <input
            type="text"
            name="number"
            value={number}
            disabled={!isEditing}
            onChange={handleChangeNumber}
          ></input>
        </label>
        <div className={styles.control}>
          {isEditing ? (
            <button
              className={styles.btn}
              style={{ backgroundColor: 'Green' }}
              type="submit"
            >
              Save
            </button>
          ) : (
            <button
              className={styles.btn}
              style={{ backgroundColor: 'Orange' }}
              onClick={handleEdit}
            >
              Edit
            </button>
          )}
          <button
            className={styles.btn}
            style={{ backgroundColor: 'red' }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
