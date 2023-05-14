import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authSlice from "./slices/authSlice.js";
import saga from "./redux/sagas/index.js";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Automatically adds the thunk middleware and the Redux DevTools extension
export default configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(saga);
