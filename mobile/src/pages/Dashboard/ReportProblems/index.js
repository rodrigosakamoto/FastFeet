import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  Container,
  Background,
  InputProblem,
  InputContainer,
  SubmitButton,
} from './styles';

export default function ReportProblems({ navigation }) {
  const deliveryId = navigation.getParam('id');

  const [problem, setProblem] = useState('');

  async function handleSubmit() {
    try {
      await api.post(`delivery/${deliveryId}/problems`, {
        description: problem,
      });
      Alert.alert('Problema cadastrado com sucesso');
      navigation.navigate('DeliveryDetails');
    } catch (err) {
      Alert.alert('Erro ao informar problema');
    }
  }

  return (
    <Container>
      <Background />
      <InputContainer>
        <InputProblem
          multiline
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          value={problem}
          onChangeText={setProblem}
        />
      </InputContainer>
      <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
    </Container>
  );
}

ReportProblems.navigationOptions = ({ navigation }) => ({
  title: 'Informar problema',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={25} color="#fff" />
    </TouchableOpacity>
  ),
});

ReportProblems.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func,
  }).isRequired,
};
