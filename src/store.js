import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import orderReducer from './features/orderSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    order: orderReducer
  },
});

export default store;
