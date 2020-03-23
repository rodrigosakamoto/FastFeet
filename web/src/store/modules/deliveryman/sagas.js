import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { editDeliverymanSuccess } from './actions';

export function* removeDeliveryman({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `deliverymans/${id}`);
    toast.success('Entregador deletado com sucesso');
  } catch (err) {
    toast.error('Falha ao deletar');
  }
}

export function* editDeliveryman({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.get, `deliverymans/${id}`);

    yield put(editDeliverymanSuccess(response.data));
    history.push('/deliverymans/edit');
  } catch (err) {
    console.tron.log('Erro');
  }
}

export function* updateDeliveryman({ payload }) {
  const { id, name, email, avatar_id } = payload.data;

  try {
    yield call(api.put, `/deliverymans/${id}`, {
      name,
      email,
      avatar_id,
    });

    toast.success('Entregador atualizado');
    history.push('/deliverymans');
  } catch (err) {
    toast.error('Falha ao atualizar');
  }
}

export function* addDelieryman({ payload }) {
  const { name, email, avatar_id } = payload.data;

  try {
    yield call(api.post, `/deliverymans`, {
      name,
      email,
      avatar_id,
    });

    toast.success('Entregador criado');
    history.push('/deliverymans');
  } catch (err) {
    toast.error('Falha ao criar entregador');
  }
}

export default all([
  takeLatest('@deliveryman/REMOVE_REQUEST', removeDeliveryman),
  takeLatest('@deliveryman/EDIT_REQUEST', editDeliveryman),
  takeLatest('@deliveryman/UPDATE_REQUEST', updateDeliveryman),
  takeLatest('@deliveryman/ADD_REQUEST', addDelieryman),
]);
