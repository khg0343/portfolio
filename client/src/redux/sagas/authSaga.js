import axios from "axios";
import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import {
  loginFailure,
  loginSuccess,
  logoutSuccess,
  logoutFailure,
  clearErrorFailure,
  clearErrorSuccess,
  registerSuccess,
  registerFailure,
} from "../../slices/authSlice";
import { sagaActions } from "./sagaActions";

const registerUserAPI = (registerData) => {
  console.log(registerData, "registerData");
  return axios.post("api/user", registerData);
};

const loginUserAPI = (loginData) => {
  console.log(loginData, "loginData");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post("api/auth", loginData, config);
};

//Register
function* registerUser(action) {
  console.log("Hello Register User");
  try {
    const result = yield call(registerUserAPI, action.payload);
    console.log(result, "RegisterUser Data");
    yield put(registerSuccess(result.data));
  } catch (e) {
    yield put(registerFailure(e.response));
  }
}

// Login
function* loginUser(action) {
  console.log("Hello Login User");
  try {
    const result = yield call(loginUserAPI, action.payload);
    console.log(result);
    yield put(loginSuccess(result.data));
  } catch (e) {
    yield put(loginFailure(e.response));
  }
}

//Logout
function* logoutUser(action) {
  console.log("Hello Logout User");
  try {
    yield put(logoutSuccess());
  } catch (e) {
    yield put(logoutFailure());
    console.log(e);
  }
}

//Clear Error
function* clearError() {
  console.log("Hello Clear Error");
  try {
    yield put(clearErrorSuccess());
  } catch (e) {
    yield put(clearErrorFailure());
    console.error(e);
  }
}

function* watchRegisterUser() {
  yield takeEvery(sagaActions.REGISTER_REQUEST, registerUser);
}
function* watchLoginUser() {
  yield takeEvery(sagaActions.LOGIN_REQUEST, loginUser);
}
function* watchLogoutUser() {
  yield takeEvery(sagaActions.LOGOUT_REQUEST, logoutUser);
}
function* watchClearError() {
  yield takeEvery(sagaActions.CLEAR_ERROR_REQUEST, clearError);
}

export default function* authSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
    fork(watchClearError),
  ]);
}
