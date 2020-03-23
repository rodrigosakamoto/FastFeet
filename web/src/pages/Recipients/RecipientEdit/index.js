import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Container, Content } from './styles';

import EditHeader from '~/components/EditHeader';

import history from '~/services/history';

import { updateRecipientRequest } from '~/store/modules/recipient/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  street: Yup.string().required('O nome da rua é obrigatório'),
  number: Yup.string().required('O numero da casa é obrigatório'),
  complement: Yup.string(),
  city: Yup.string().required('O nome da cidade é obrigatório'),
  state: Yup.string()
    .required('O nome do estado é obrigatório')
    .max(2, 'maximo dois caracteres'),
  zipcode: Yup.string('Apenas numeros').required('O CEP é obrigatório'),
});

export default function RecipientEdit() {
  const dispatch = useDispatch();
  const recipient = useSelector(state => state.recipient.recipient);

  function handleSubmit({
    name,
    street,
    number,
    complement,
    city,
    state,
    zipcode,
  }) {
    const data = {
      id: recipient.id,
      name,
      street,
      number,
      complement,
      city,
      state,
      zipcode,
    };
    dispatch(updateRecipientRequest(data));
  }

  return (
    <Container>
      <Form initialData={recipient} onSubmit={handleSubmit} schema={schema}>
        <EditHeader>
          <p>Edição de destinatário</p>
          <div>
            <button
              type="button"
              className="back"
              onClick={() => history.push('/recipients')}
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
          <p>Nome</p>
          <Input name="name" />
          <div className="line2">
            <div className="item">
              <p>Rua</p>
              <Input name="street" />
            </div>

            <div className="item">
              <p>Número</p>
              <Input name="number" />
            </div>

            <div className="item">
              <p>Complemento</p>
              <Input name="complement" />
            </div>
          </div>
          <div className="line3">
            <div className="item">
              <p>Cidade</p>
              <Input name="city" />
            </div>
            <div className="item">
              <p>Estado</p>
              <Input name="state" />
            </div>
            <div className="item">
              <p>CEP</p>
              <Input name="zipcode" />
            </div>
          </div>
        </Content>
      </Form>
    </Container>
  );
}
