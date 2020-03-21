import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, ModalList, Modal } from './styles';

export default function DeliveryModal({ children }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <button type="button" onClick={handleToggleVisible}>
        <MdMoreHoriz size={24} color="#C6C6C6" />
      </button>
      <ModalList visible={visible}>
        <Modal>{children}</Modal>
      </ModalList>
    </Container>
  );
}

DeliveryModal.propTypes = {
  children: PropTypes.element.isRequired,
};
