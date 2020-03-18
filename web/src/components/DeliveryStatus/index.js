import React from 'react';

import { MdFiberManualRecord } from 'react-icons/md';

import { Container } from './styles';

export default function DeliveryStatus({ data }) {
  return (
    <Container>
      <div>
        {data.start_date && !data.end_date && !data.canceled_at ? (
          <span className="status-retirada">
            <MdFiberManualRecord size={12} />
            RETIRADA
          </span>
        ) : null}

        {data.start_date &&
        data.end_date &&
        data.signature &&
        !data.canceled_at ? (
          <span className="status-entregue">
            <MdFiberManualRecord size={12} />
            ENTREGUE
          </span>
        ) : null}

        {!data.start_date && !data.end_date && !data.canceled_at ? (
          <span className="status-pendente">
            <MdFiberManualRecord size={12} />
            PENDENTE
          </span>
        ) : null}

        {data.canceled_at ? (
          <span className="status-cancelada">
            <MdFiberManualRecord size={12} />
            CANCELADA
          </span>
        ) : null}
      </div>
    </Container>
  );
}
