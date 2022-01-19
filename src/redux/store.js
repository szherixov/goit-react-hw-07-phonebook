import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducer from './contacts/reducers';
import filterReducer from './contacts/filterReducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  contacts: reducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
