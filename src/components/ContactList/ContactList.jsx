import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/operations';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import styles from './ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.list_li}>
            <span className={styles.span}>{contact.name}</span>
            <span className={styles.span}>{contact.phone}</span>
            <button
              type="button"
              id={contact.id}
              onClick={() => dispatch(removeContact(contact.id))}
              className={styles.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
