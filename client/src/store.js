import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import authSlice from "./slices/authSlice";

// Automatically adds the thunk middleware and the Redux DevTools extension
export default configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
