import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import stepperReducer from "./features/stepperSlice";
import filterDestinationsReducer from "./features/filterDestinationsSlice";
import { apiSlice } from "./services/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    auth: authReducer,
    stepper: stepperReducer,
    filterDestinations: filterDestinationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([apiSlice.middleware]),
});

setupListeners(store.dispatch);

export default store;
