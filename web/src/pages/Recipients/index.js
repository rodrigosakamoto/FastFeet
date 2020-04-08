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
  removeRecipientRequest,
  editRecipientRequest,
} from '~/store/modules/recipient/actions';

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
      dispatch(removeRecipientRequest(id));
    }
  }

  function handleEdit(id) {
    dispatch(editRecipientRequest(id));
  }

  function handlePage(action) {
    setPage(action === 'next' ? page + 1 : page - 1);
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
        <button type="button" onClick={() => history.push('recipients/add')}>
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
                <p>
                  {recipient.street}, {recipient.number}, {recipient.city} -{' '}
                  {recipient.state}
                </p>
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
          disabled={recipients.length < 6}
          onClick={() => handlePage('next')}
        >
          <MdKeyboardArrowRight size={24} color="#fff" />
        </button>
      </Pagination>
    </Container>
  );
}
