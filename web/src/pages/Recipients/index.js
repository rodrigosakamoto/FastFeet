import React from 'react';
import api from '~/services/api';
// import { Container } from './styles';

export default function Recipients() {
  api.get('deliveries');
  return <h1>Destinatários</h1>;
}
