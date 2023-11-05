import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../src/features/counter/counterSlice";
import { apiSlice } from "../src/features/api/apiSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }
});

export default store;
