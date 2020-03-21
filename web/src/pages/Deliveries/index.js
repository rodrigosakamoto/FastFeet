import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import {
  MdAdd,
  MdSearch,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import { formatDateWithDate } from '~/utils/FormatDate';

import { Container, List, Pagination, ModalView, ModalBox } from './styles';

import PageActions from '~/components/PageActions';
import Modal from '~/components/Modal';
import DeliveryStatus from '~/components/DeliveryStatus';

import api from '../../services/api';
import history from '~/services/history';

import {
  removeDeliveryRequest,
  editDeliveryRequest,
} from '~/store/modules/delivery/actions';

export default function Deliveries() {
  const dispatch = useDispatch();
  const [deliveries, setDeliveries] = useState([]);
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState([]);
  const [recipient, setRecipient] = useState([]);

  const formattedStartDate = useMemo(
    () => item.start_date && formatDateWithDate(String(item.start_date)),
    [item.start_date]
  );
  const formattedEndDate = useMemo(
    () => item.end_date && formatDateWithDate(String(item.end_date)),
    [item.end_date]
  );

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
    setPage(1);
  }

  function handleDelete(id) {
    const resp = window.confirm('Deseja excluir a encomenda?');
    if (resp === true) {
      dispatch(removeDeliveryRequest(id));
    }
  }

  function handleEdit(id) {
    history.push('/deliveries/edit');
    dispatch(editDeliveryRequest(id));
  }

  function handlePage(action) {
    setPage(action === 'next' ? page + 1 : page - 1);
  }

  async function handleModal(id) {
    const response = await api.get(`/deliveries/${id}`);

    setRecipient(response.data.recipient);
    setItem(response.data);
    setVisible(!visible);
  }

  function handleClose() {
    setVisible(!visible);
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
                <Modal>
                  <button
                    type="button"
                    onClick={() => handleModal(delivery.id)}
                  >
                    <MdVisibility size={24} color="#8E5BE8" />
                    Visualizar
                  </button>

                  <button type="button" onClick={() => handleEdit(delivery.id)}>
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
      <ModalView visible={visible}>
        <ModalBox>
          <button type="button" onClick={handleClose}>
            X
          </button>
          <h2>Informações da encomenda</h2>
          <p>
            {recipient.street}
            <span>, </span> {recipient.number}
          </p>
          <p>
            {recipient.city}
            <span> - </span>
            {recipient.state}
          </p>
          <p>{recipient.zipcode}</p>
          <hr />
          <h2>Datas</h2>
          <p>Retirada: {formattedStartDate || 'Ainda não retirado'}</p>
          <p>Entrega: {formattedEndDate || 'Ainda não entregue'}</p>
          {item.signature ? (
            <img src={item.signature.url} alt="Assinatura" />
          ) : (
            <p>Nenhuma assinatura registrada</p>
          )}
        </ModalBox>
      </ModalView>
    </Container>
  );
}
