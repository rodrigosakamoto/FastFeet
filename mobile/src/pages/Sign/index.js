import React, { useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function Sign() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />

      <Image source={logo} />
      <Form>
        <FormInput
          placeholder="Informe seu ID de cadastro"
          autoCapitalize="none"
          autoCorrect={false}
          value={id}
          onChangeText={setId}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
