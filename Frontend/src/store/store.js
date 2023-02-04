import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth-slice';

const reducer = {
  auth: authReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
