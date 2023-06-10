import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import orderReducer from './features/orderSlice'
import carReducer from './features/carSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    car: carReducer,
    order: orderReducer
  },
});

export default store;
