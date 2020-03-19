import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { editDeliverySuccess } from './actions';

export function* removeDelivery({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `deliveries/${id}`);
    toast.success('Encomenda deletada com sucesso');
  } catch (err) {
    toast.error('Falha ao deletar');
  }
}

export function* addDelivery({ payload }) {
  try {
    const { recipient_id, deliveryman_id, product } = payload;

    if (!product) {
      toast.error('Você precisa adicionar um produto');
    }

    if (!deliveryman_id) {
      toast.error('Você precisa adicionar um destinatário');
    }

    if (!recipient_id) {
      toast.error('Você precisa adicionar um entregador');
    }

    yield call(api.post, `deliveries`, {
      recipient_id,
      deliveryman_id,
      product,
    });
    toast.success('Encomenda criada com sucesso');
  } catch (err) {
    toast.error('Falha ao adicionar');
  }
}

export function* editDelivery({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `/deliveries/${id}`);

    const recipient = response.data.recipient.name;

    const deliveryman = response.data.deliveryman.name;

    yield put(editDeliverySuccess(response.data, recipient, deliveryman));

    history.push('/deliveries/edit');
  } catch (err) {
    console.tron.log('Erro');
  }
}

export function* updateDelivery({ payload }) {
  const { id, recipient_id, deliveryman_id, product } = payload;

  try {
    if (!product) {
      toast.error('Você precisa adicionar um produto');
    }

    if (!deliveryman_id) {
      toast.error('Você precisa adicionar um destinatário');
    }

    if (!recipient_id) {
      toast.error('Você precisa adicionar um entregador');
    }

    yield call(api.put, `deliveries/${id}`, {
      recipient_id,
      deliveryman_id,
      product,
    });
    toast.success('Encomenda editada com sucesso');
  } catch (err) {
    toast.error('Falha ao editar');
  }
}

export default all([
  takeLatest('@delivery/REMOVE_REQUEST', removeDelivery),
  takeLatest('@delivery/ADD_REQUEST', addDelivery),
  takeLatest('@delivery/EDIT_REQUEST', editDelivery),
  takeLatest('@delivery/UPDATE_REQUEST', updateDelivery),
]);
