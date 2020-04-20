import { all, takeLatest } from 'redux-saga/effects';
import { Types as AuthTypes } from '../ducks/auth';
import { signIn, setToken, signUp, signOut } from './auth';

export default function* rootSaga() {
  return yield all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
  ]);
}
