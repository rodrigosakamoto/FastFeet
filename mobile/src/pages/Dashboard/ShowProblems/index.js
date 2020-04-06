import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import {
  Container,
  Background,
  Title,
  ProblemListContainer,
  ProblemList,
  ProblemContainer,
  ProblemText,
  ProblemDate,
} from './styles';

export default function ShowProblems({ navigation }) {
  const [problems, setProblems] = useState([]);
  const deliveryId = navigation.getParam('delivery');

  useEffect(() => {
    async function loadDeliveryProblems() {
      const response = await api.get(`delivery/${deliveryId}/problems`);
      setProblems(response.data);
    }
    loadDeliveryProblems();
  }, []);

  console.tron.log(problems);

  return (
    <Container>
      <Background />
      <Title>Encomenda {deliveryId}</Title>
      <ProblemListContainer>
        <ProblemList
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ProblemContainer>
              <ProblemText>{item.description}</ProblemText>
              <ProblemDate>
                {format(parseISO(item.createdAt), 'dd/MM/yyyy')}
              </ProblemDate>
            </ProblemContainer>
          )}
        />
      </ProblemListContainer>
    </Container>
  );
}

ShowProblems.navigationOptions = ({ navigation }) => ({
  title: 'Visualizar problemas',
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
