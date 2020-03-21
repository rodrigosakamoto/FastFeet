import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export function* removeDeliveryman({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `deliverymans/${id}`);
    toast.success('Entregador deletado com sucesso');
  } catch (err) {
    toast.error('Falha ao deletar');
  }
}

export default all([
  takeLatest('@deliveryman/REMOVE_REQUEST', removeDeliveryman),
]);
