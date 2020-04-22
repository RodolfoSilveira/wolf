import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../services/history';
import api from '../../services/api';
import { Creators as AuthCreators } from '../ducks/auth';

export function* signIn({ payload }: any) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;
  
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(AuthCreators.signInSuccess(token, user));
    
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(AuthCreators.signFailure());
  }
}

export function* signUp({ payload }: any) {
  try {
    const { name, email, password } = payload;
    
    yield call(api.post, 'user', {
      name,
      email,
      password,
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, varifique seus dados!');

    yield put(AuthCreators.signFailure());
  }
}

export function setToken({ payload }: any) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}
