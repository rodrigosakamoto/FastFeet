import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { Container, Content, Select } from './styles';

import EditHeader from '~/components/EditHeader';

import history from '~/services/history';
import api from '~/services/api';

import { updateDeliveryRequest } from '~/store/modules/delivery/actions';

export default function DeliveryEdit() {
  const dispatch = useDispatch();
  const delivery = useSelector(state => state.delivery.delivery);
  const recipientName = useSelector(state => state.delivery.recipient);
  const deliverymanName = useSelector(state => state.delivery.deliveryman);

  const [recipients, setRecipients] = useState([]);
  const [recipient, setRecipient] = useState('');

  const [deliverymans, setDeliverymans] = useState([]);
  const [deliveryman, setDeliveryman] = useState('');

  async function loadRecipients() {
    const response = await api.get('recipients');
    setRecipients(
      response.data.map(r => {
        return {
          value: r.id,
          label: r.name,
        };
      })
    );
  }

  async function loadDeliverymans() {
    const response = await api.get('deliverymans');
    setDeliverymans(
      response.data.map(d => {
        return {
          value: d.id,
          label: d.name,
        };
      })
    );
  }

  useEffect(() => {
    loadDeliverymans();
    loadRecipients();
  }, []);

  async function handleSubmit({ product }) {
    dispatch(
      updateDeliveryRequest(
        delivery.id,
        deliveryman.value,
        recipient.value,
        product
      )
    );
  }

  return (
    <Container>
      <Form initialData={delivery} onSubmit={handleSubmit}>
        <EditHeader>
          <p>Edição de encomendas</p>
          <div>
            <button
              type="button"
              className="back"
              onClick={() => history.push('/deliveries')}
            >
              <MdKeyboardArrowLeft size={24} color="fff" />
              VOLTAR
            </button>
            <button type="submit">
              <MdDone size={24} color="#fff" />
              SALVAR
            </button>
          </div>
        </EditHeader>
        <Content>
          <div className="container">
            <div>
              <p>Detinatário</p>
              <Select
                value={recipient}
                loadOptions={loadRecipients}
                onChange={setRecipient}
                defaultOptions={recipients}
                defaultInputValue={recipientName}
                placeholder={recipientName}
              />
            </div>
            <div>
              <p>Entregador</p>
              <Select
                value={deliveryman}
                loadOptions={loadDeliverymans}
                onChange={setDeliveryman}
                defaultOptions={deliverymans}
                defaultInputValue={deliverymanName}
                placeholder={deliverymanName}
              />
            </div>
          </div>
          <p>Nome do Produto</p>
          <Input name="product" />
        </Content>
      </Form>
    </Container>
  );
}
