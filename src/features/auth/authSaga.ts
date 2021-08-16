import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take, put, delay } from '@redux-saga/core/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  yield delay(1000);
  const fakeUser: LoginPayload = {
    username: 'admin',
    password: '1',
  };
  if (payload.username === fakeUser.username && payload.password === fakeUser.password) {
    console.log('success');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'admin',
      })
    );
  } else {
    console.log('Fail');
    yield put(authActions.loginFailed('Login fail!'));
  }
}

function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
    yield fork(handleLogin, action.payload);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
