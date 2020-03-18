import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

export function* removeDelivery({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `deliveries/${id}`);
    toast.success('Encomenda deletada com sucesso');
  } catch (err) {
    toast.error('Falha ao deletar');
  }
}

export default all([takeLatest('@delivery/REMOVE_REQUEST', removeDelivery)]);
