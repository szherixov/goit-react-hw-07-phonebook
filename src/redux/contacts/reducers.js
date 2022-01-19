import { createSlice } from '@reduxjs/toolkit';
import { removeContact, getContacts, addContact } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addContact.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [addContact.pending]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      items: [...state.items, payload],
    }),
    [getContacts.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [getContacts.pending]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [getContacts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        items: payload,
      };
    },
    [removeContact.pending]: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [removeContact.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      items: state.items.filter(({ id }) => id !== payload),
    }),
    [removeContact.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
  },
});

export default contactSlice.reducer;
