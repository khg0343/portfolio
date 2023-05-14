import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  user: "",
  userId: "",
  userName: "",
  userRole: "",
  errorMsg: "",
  successMsg: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      console.log("loginRequest");
      state.errorMsg = "";
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload.user;
      state.userName = action.payload.user.name;
      state.userId = action.payload.user.id;
      state.userRole = action.payload.user.role;
      state.errorMsg = "";
    },
    loginFailure: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.userId = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.userRole = null;
      state.errorMsg = action.payload.data.msg;
    },
    registerRequest: (state) => {
      console.log("registerRequest");
      state.errorMsg = "";
      state.isLoading = true;
    },
    registerSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.isAuthenticated = true;
      state.isLoading = false;
      state.userId = action.payload.user.id;
      state.userRole = action.payload.user.role;
      state.errorMsg = "";
    },
    registerFailure: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.userId = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.userRole = null;
      state.errorMsg = action.payload.data.msg;
    },
    clearErrorRequest: (state) => {
      console.log("clearErrorRequest");
      state.errorMsg = null;
    },
    clearErrorSuccess: (state) => {
      state.errorMsg = null;
    },
    clearErrorFailure: (state) => {
      state.errorMsg = null;
    },
    logoutRequest: (state) => {
      console.log("logoutRequest");
      state.errorMsg = "";
      state.isLoading = true;
    },
    logoutSuccess: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.userId = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.userRole = null;
      state.errorMsg = "";
    },
    logoutFailure: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.userId = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.userRole = null;
      state.errorMsg = action.payload.data.msg;
    },
  },
});

export default authSlice;
export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  clearErrorRequest,
  clearErrorSuccess,
  clearErrorFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
} = authSlice.actions;
