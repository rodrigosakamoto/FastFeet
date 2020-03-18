import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { Container, Header, Content, Select } from './styles';

import history from '~/services/history';
import api from '~/services/api';

export default function DeliveryAdd() {
  const [recipients, setRecipients] = useState([]);

  return (
    <Container>
      <Form>
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
            <button type="button">
              <MdDone size={24} color="#fff" />
              SALVAR
            </button>
          </div>
        </Header>
        <Content>
          <div className="container">
            <div>
              <p>Detinatário</p>
              <Select />
            </div>
            <div>
              <p>Entregador</p>
              <Select />
            </div>
          </div>
          <p>Nome do Produto</p>
          <Input type="text" name="product" />
        </Content>
      </Form>
    </Container>
  );
}
