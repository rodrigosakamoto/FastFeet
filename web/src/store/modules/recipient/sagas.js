import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { editRecipientSuccess } from './actions';

export function* removeRecipient({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `recipients/${id}`);
    toast.success('Detinatário deletado com sucesso');
  } catch (err) {
    toast.error('Falha ao deletar');
  }
}

export function* editRecipient({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.get, `recipients/${id}`);

    yield put(editRecipientSuccess(response.data));
    history.push('/recipients/edit');
  } catch (err) {
    console.tron.log('Erro');
  }
}

export function* updateRecipient({ payload }) {
  const {
    id,
    name,
    street,
    number,
    complement,
    city,
    state,
    zipcode,
  } = payload.data;

  try {
    yield call(api.put, `/recipients/${id}`, {
      name,
      street,
      number,
      complement,
      city,
      state,
      zipcode,
    });

    toast.success('Destinatário atualizado');
    history.push('/recipients');
  } catch (err) {
    toast.error('Falha ao atualizar');
  }
}

export function* addRecipients({ payload }) {
  const {
    name,
    street,
    number,
    complement,
    city,
    state,
    zipcode,
  } = payload.data;

  try {
    yield call(api.post, `/recipients`, {
      name,
      street,
      number,
      complement,
      city,
      state,
      zipcode,
    });

    toast.success('Destinatário criado');
    history.push('/recipients');
  } catch (err) {
    toast.error('Falha ao criar destinatário');
  }
}

export default all([
  takeLatest('@recipient/REMOVE_REQUEST', removeRecipient),
  takeLatest('@recipient/EDIT_REQUEST', editRecipient),
  takeLatest('@recipient/UPDATE_REQUEST', updateRecipient),
  takeLatest('@recipient/ADD_REQUEST', addRecipients),
]);
