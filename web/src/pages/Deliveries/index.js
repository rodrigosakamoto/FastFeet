import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import {
  MdAdd,
  MdSearch,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, PageActions, List, Pagination } from './styles';

import DeliveryModal from '~/components/DeliveryModal';
import DeliveryStatus from '~/components/DeliveryStatus';

import api from '../../services/api';
import history from '~/services/history';

import { removeDeliveryRequest } from '~/store/modules/delivery/actions';

export default function Deliveries() {
  const dispatch = useDispatch();
  const [deliveries, setDeliveries] = useState([]);
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/deliveries', {
        params: {
          q: product,
          page,
        },
      });
      setDeliveries(response.data);
    }
    loadDeliveries();
  }, [product, deliveries, page]);

  function handleSubmit({ produto }) {
    setProduct(produto);
  }

  function handleDelete(id) {
    const resp = window.confirm('Deseja excluir a encomenda?');
    if (resp === true) {
      dispatch(removeDeliveryRequest(id));
    }
  }

  function handlePage(action) {
    setPage(action === 'next' ? page + 1 : page - 1);
  }

  return (
    <Container>
      <header>
        <p>Gerenciando encomendas</p>
      </header>
      <PageActions>
        <Form onSubmit={handleSubmit}>
          <MdSearch size={24} color="#999" />

          <Input name="produto" placeholder="Buscar por encomendas" />
        </Form>
        <button type="button" onClick={() => history.push('/deliveries/add')}>
          <MdAdd size={24} color="#fff" />
          CADASTRAR
        </button>
      </PageActions>
      <List>
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUTO</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(delivery => (
            <tr key={delivery.id}>
              <td>#{delivery.id}</td>
              <td>{delivery.product}</td>
              <td>{delivery.recipient.name}</td>
              <td>
                <div>
                  <img
                    src={
                      delivery.deliveryman.avatar
                        ? delivery.deliveryman.avatar.url
                        : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                    }
                    alt="avatar"
                  />
                  {delivery.deliveryman.name}
                </div>
              </td>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.state}</td>
              <td>
                <span>
                  <DeliveryStatus data={delivery} />
                </span>
              </td>
              <td>
                <DeliveryModal>
                  <button type="button">
                    <MdVisibility size={24} color="#8E5BE8" />
                    Visualizar
                  </button>

                  <button type="button">
                    <MdCreate size={24} color="#4D85EE" />
                    Editar
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(delivery.id)}
                  >
                    <MdDeleteForever size={24} color="#DE3B3B" />
                    Excluir
                  </button>
                </DeliveryModal>
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
          Anterior
        </button>
        <span>Página {page}</span>
        <button
          type="button"
          disabled={deliveries.length < 6}
          onClick={() => handlePage('next')}
        >
          Próximo
        </button>
      </Pagination>
    </Container>
  );
}
