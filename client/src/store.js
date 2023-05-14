import { configureStore } from "@reduxjs/toolkit";

//import { listenerMiddleware } from "./listenerMiddleware";

import { apiSlice } from "./slices/apiSlice";
import counterReducer from "./slices/counterSlice";

// Automatically adds the thunk middleware and the Redux DevTools extension
export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    counter: counterReducer,
  },
  // middleware: (getDefaultMiddleware) =>   getDefaultMiddleware.prepend(listenerMiddleware.middleware),
});
