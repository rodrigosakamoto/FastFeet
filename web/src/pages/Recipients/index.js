import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAdd, MdSearch, MdCreate, MdDeleteForever } from 'react-icons/md';

import { Container, List } from './styles';

import Modal from '~/components/Modal';
import ListHeader from '~/components/ListHeader';

import api from '~/services/api';
import history from '~/services/history';

import {
  removeDeliverymanRequest,
  editDeliverymanRequest,
} from '~/store/modules/deliveryman/actions';

export default function Recipients() {
  const dispatch = useDispatch();
  const [recipients, setRecipients] = useState([]);
  const [page, setPage] = useState(1);
  const [recipientsName, setRecipientsName] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('/recipients', {
        params: {
          q: recipientsName,
          page,
        },
      });

      setRecipients(response.data);
    }
    loadRecipients();
  }, [recipientsName, recipients, page]);

  function handleSubmit({ destinatario }) {
    setRecipientsName(destinatario);
    setPage(1);
  }

  function handleDelete(id) {
    const resp = window.confirm('Deseja excluir o destinatário?');
    if (resp === true) {
      dispatch(removeDeliverymanRequest(id));
    }
  }

  function handleEdit(id) {
    dispatch(editDeliverymanRequest(id));
  }

  return (
    <Container>
      <header>
        <p>Gerenciando destinatários</p>
      </header>
      <ListHeader>
        <Form onSubmit={handleSubmit}>
          <MdSearch size={24} color="#999" />

          <Input name="destinatario" placeholder="Buscar por destinatário" />
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
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map(recipient => (
            <tr key={recipient.id}>
              <td>#{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>
                {recipient.street} ,{recipient.number},{recipient.city} -
                {recipient.state}
              </td>
              <td>
                <Modal>
                  <button
                    type="button"
                    onClick={() => handleEdit(recipient.id)}
                  >
                    <MdCreate size={24} color="#4D85EE" />
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(recipient.id)}
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
    </Container>
  );
}
