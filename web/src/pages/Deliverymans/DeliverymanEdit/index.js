import React from 'react';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { Container } from './styles';

import EditHeader from '~/components/EditHeader';

export default function DeliverymanEdit() {
  return (
    <Container>
      <EditHeader>
        <p>Edição de entregadores</p>
        <div>
          <button type="button" className="back">
            <MdKeyboardArrowLeft size={24} color="fff" />
            VOLTAR
          </button>
          <button type="submit">
            <MdDone size={24} color="#fff" />
            SALVAR
          </button>
        </div>
      </EditHeader>
    </Container>
  );
}
