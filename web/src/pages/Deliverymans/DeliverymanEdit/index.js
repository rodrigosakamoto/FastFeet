import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Container, Content } from './styles';

import { updateDeliverymanRequest } from '~/store/modules/deliveryman/actions';

import EditHeader from '~/components/EditHeader';
import AvatarInput from '../AvatarInput';

import history from '~/services/history';

const schema = Yup.object().shape({
  avatar_id: Yup.number(),
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function DeliverymanEdit() {
  const dispatch = useDispatch();
  const deliveryman = useSelector(state => state.deliveryman.deliveryman);

  function handleSubmit({ name, email, avatar_id }) {
    console.tron.log(name);

    const data = {
      id: deliveryman.id,
      name,
      email,
      avatar_id,
    };

    dispatch(updateDeliverymanRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} initialData={deliveryman} onSubmit={handleSubmit}>
        <EditHeader>
          <p>Edição de entregadores</p>
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
