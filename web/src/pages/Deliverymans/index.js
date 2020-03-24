import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import {
  MdAdd,
  MdSearch,
  MdCreate,
  MdDeleteForever,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';

import { Container, List, Pagination } from './styles';

import Modal from '~/components/Modal';
import ListHeader from '~/components/ListHeader';

import api from '~/services/api';
import history from '~/services/history';

import {
  removeDeliverymanRequest,
  editDeliverymanRequest,
} from '~/store/modules/deliveryman/actions';

export default function Deliverymans() {
  const dispatch = useDispatch();
  const [deliverymans, setDeliverymans] = useState([]);
  const [page, setPage] = useState(1);
  const [deliverymansName, setDeliverymansName] = useState([]);

  useEffect(() => {
    async function loadDeliverymans() {
      const response = await api.get('/deliverymans', {
        params: {
          q: deliverymansName,
          page,
        },
      });

      setDeliverymans(response.data);
    }
    loadDeliverymans();
  }, [deliverymansName, deliverymans, page]);

  function handleSubmit({ entregador }) {
    setDeliverymansName(entregador);
    setPage(1);
  }

  function handleDelete(id) {
    const resp = window.confirm('Deseja excluir o entregador?');
    if (resp === true) {
      dispatch(removeDeliverymanRequest(id));
    }
  }

  function handleEdit(id) {
    dispatch(editDeliverymanRequest(id));
  }

  function handlePage(action) {
    setPage(action === 'next' ? page + 1 : page - 1);
  }

  return (
    <Container>
      <header>
        <p>Gerenciando entregadores</p>
      </header>
      <ListHeader>
        <Form onSubmit={handleSubmit}>
          <MdSearch size={24} color="#999" />

          <Input name="entregador" placeholder="Buscar por entregadores" />
        </Form>
        <button type="button" onClick={() => history.push('deliverymans/add')}>
          <MdAdd size={24} color="#fff" />
          CADASTRAR
        </button>
      </ListHeader>
      <List>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymans.map(deliveryman => (
            <tr key={deliveryman.id}>
              <td>#{deliveryman.id}</td>
              <td>
                <div>
                  <img
                    src={
                      deliveryman.avatar
                        ? deliveryman.avatar.url
                        : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                    }
                    alt="avatar"
                  />
                </div>
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <Modal>
                  <button
                    type="button"
                    onClick={() => handleEdit(deliveryman.id)}
                  >
                    <MdCreate size={24} color="#4D85EE" />
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(deliveryman.id)}
                  >
                    <MdDeleteForever size={24} color="#DE3B3B" />
                    Excluir
                  </button>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </List>
      <Pagination>
        <button
          type="button"
          disabled={page < 2}
          onClick={() => handlePage('back')}
        >
          <MdKeyboardArrowLeft size={24} color="#fff" />
        </button>
        <span>Página {page}</span>
        <button
          type="button"
          disabled={deliverymans.length < 6}
          onClick={() => handlePage('next')}
        >
          <MdKeyboardArrowRight size={24} color="#fff" />
        </button>
      </Pagination>
    </Container>
  );
}
