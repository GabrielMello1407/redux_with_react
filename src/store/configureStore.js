import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import contador from './contador';
import modal from './modal';
import logger from './middleware/logger';

// criando a store
const reducer = combineReducers({ contador, modal });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
