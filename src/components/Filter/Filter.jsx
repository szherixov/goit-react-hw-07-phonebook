import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/actions';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => dispatch(changeFilter(e.target.value));
  const value = useSelector(state => state.filter);

  return (
    <div className={styles.section}>
      <label>
        <h2 className={styles.title}>Find contact by name</h2>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={handleChange}
          className={styles.input}
          placeholder="find name..."
        />
      </label>
    </div>
  );
};

export default Filter;
