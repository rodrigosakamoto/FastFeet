import React from 'react';
import api from '~/services/api';
// import { Container } from './styles';

export default function RecipientList() {
  api.get('deliveries');
  return <h1>Lista</h1>;
}
