import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactApi, getContactsApi, removeContactApi } from '../../services/contactsAPI';

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkApi) => {
  try {
    const contacts = await addContactApi(contact);
    return contacts;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const getContacts = createAsyncThunk('contacts/getContacts', async (_, thunkApi) => {
  try {
    const contacts = await getContactsApi();
    console.log('contacts :>> ', contacts);
    return contacts;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const removeContact = createAsyncThunk('contacts/removeContact', async (id, thunkApi) => {
  try {
    const respId = await removeContactApi(id);
    return respId;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
