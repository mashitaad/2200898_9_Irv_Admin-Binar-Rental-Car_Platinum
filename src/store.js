import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import orderReducer from './features/orderSlice'
import carReducer from './features/carSlice'
import dropReducer from "./features/dropdownSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    car: carReducer,
    order: orderReducer,
    dropdown: dropReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export default store;
