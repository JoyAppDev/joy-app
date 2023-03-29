import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth-slice';
import creativesReducer from '../slices/creative-slice';

const reducer = {
  auth: authReducer,
  content: creativesReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
