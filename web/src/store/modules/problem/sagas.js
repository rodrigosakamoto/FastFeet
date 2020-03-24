import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export function* removeProblem({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `problem/${id}/cancel-delivery`);
    toast.success('Encomenda cancelada com sucesso');
  } catch (err) {
    toast.error('Falha ao deletar');
  }
}

export default all([takeLatest('@problem/REMOVE_REQUEST', removeProblem)]);
