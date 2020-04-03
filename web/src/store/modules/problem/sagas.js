import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

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
