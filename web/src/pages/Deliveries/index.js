import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import { Container, PageActions, List } from './styles';

import api from '../../services/api';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/deliveries');
      setDeliveries(response.data);
    }
    loadDeliveries();
  }, []);
  return (
    <Container>
      <header>
        <p>Gerenciando encomendas</p>
      </header>
      <PageActions>
        <div>
          <MdSearch size={24} color="#999" />

          <input placeholder="Buscar por encomendas" />
        </div>
        <button type="button">
          <MdAdd size={24} color="#fff" />
          CADASTRAR
        </button>
      </PageActions>
      <List>
        <thead>
          <tr>
            <th>ID</th>
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
            <tr>
              <td>{delivery.id}</td>
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
                <span>Entregue</span>
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </List>
    </Container>
  );
}
