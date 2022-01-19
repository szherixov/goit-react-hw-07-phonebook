import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from './redux/contacts/operations';
import Form from './components/ContactForm';
import Contacts from './components/ContactList';
import Filter from './components/Filter';
import styles from './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Phonebook</h1>
      <Form />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
};

export default App;