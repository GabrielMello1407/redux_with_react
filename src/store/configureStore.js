import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import contador from './contador';
import modal from './modal';
import login from './login';
// import logger from './middleware/logger';
import localStorage from './middleware/localStorage';

// criando a store
const reducer = combineReducers({ contador, modal, login });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  localStorage,
});

export default store;
