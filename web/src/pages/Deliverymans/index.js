import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAdd, MdSearch, MdCreate, MdDeleteForever } from 'react-icons/md';

import { Container, List } from './styles';

import Modal from '~/components/Modal';
import PageActions from '~/components/PageActions';

import history from '~/services/history';
import api from '~/services/api';

export default function Deliverymans() {
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

  return (
    <Container>
      <header>
        <p>Gerenciando entregadores</p>
      </header>
      <PageActions>
        <Form onSubmit={handleSubmit}>
          <MdSearch size={24} color="#999" />

          <Input name="entregador" placeholder="Buscar por entregadores" />
        </Form>
        <button type="button">
          <MdAdd size={24} color="#fff" />
          CADASTRAR
        </button>
      </PageActions>
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
                  <button type="button">
                    <MdCreate size={24} color="#4D85EE" />
                    Editar
                  </button>
                  <button type="button">
                    <MdDeleteForever size={24} color="#DE3B3B" />
                    Excluir
                  </button>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </List>
    </Container>
  );
}
