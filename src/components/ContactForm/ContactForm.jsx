import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import styles from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const contactSelector = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onAddContact = e => {
    e.preventDefault();
    const contact = { name, phone };
    console.log(addContact(contact));
    console.log(contactSelector);
    const isNameContact = contactSelector.some(e => e.name.toLowerCase() === name.toLowerCase());
    if (isNameContact) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(addContact(contact));
    setName('');
    setPhone('');
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'phone':
        setPhone(value);
        return;
      default:
        return;
    }
  };

  return (
    <form onSubmit={onAddContact} className={styles.form}>
      <label className={styles.label}>
        <span className={styles.message}>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={handleChange}
          required
          placeholder="add name..."
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        <span className={styles.message}>Phone number</span>
        <input
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          onChange={handleChange}
          required
          placeholder="add number..."
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button} title="Добавить новый контакт">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
