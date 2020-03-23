import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { Container, Header, Content, Select } from './styles';

import history from '~/services/history';
import api from '~/services/api';

import { addDeliveryRequest } from '~/store/modules/delivery/actions';

export default function DeliveryAdd() {
  const dispatch = useDispatch();

  const [recipients, setRecipients] = useState([]);
  const [recipient, setRecipient] = useState('');

  const [deliverymans, setDeliverymans] = useState([]);
  const [deliveryman, setDeliveryman] = useState('');

  const schema = Yup.object().shape({
    recipient: Yup.number().required('É preciso informar o destinatário.'),
    deliveryman: Yup.number().required('É preciso informar o destinatário.'),
    product: Yup.string().required('O produto é obrigatório'),
  });

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
    dispatch(addDeliveryRequest(deliveryman.value, recipient.value, product));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <Header>
          <p>Cadastro de encomendas</p>
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
        </Header>
        <Content>
          <div className="container">
            <div>
              <p>Detinatário</p>
              <Select
                name={recipient}
                value={recipient}
                loadOptions={loadRecipients}
                onChange={setRecipient}
                defaultOptions={recipients}
              />
            </div>
            <div>
              <p>Entregador</p>
              <Select
                name={deliveryman}
                value={deliveryman}
                loadOptions={loadDeliverymans}
                onChange={setDeliveryman}
                defaultOptions={deliverymans}
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
