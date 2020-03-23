import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Container, Content } from './styles';

import { addDeliverymanRequest } from '~/store/modules/deliveryman/actions';

import EditHeader from '~/components/EditHeader';
import AvatarInput from '../DeliverymanEdit/AvatarInput';

import history from '~/services/history';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function DeliverymanAdd() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(addDeliverymanRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <EditHeader>
          <p>Cadastro de entregadores</p>
          <div>
            <button
              type="button"
              className="back"
              onClick={() => history.push('/deliverymans')}
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
          <AvatarInput name="avatar_id" />
          <p>Nome</p>
          <Input name="name" placeholder="Nome completo" />
          <p>Email</p>
          <Input
            name="email"
            type="email"
            placeholder="Seu endereço de e-mail"
          />
        </Content>
      </Form>
    </Container>
  );
}
