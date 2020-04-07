import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StatusBar, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  Container,
  Background,
  DeliveryCard,
  DeliveryHeader,
  HeaderText,
  DeliveryInfo,
  InfoTitle,
  Info,
  StatusCard,
  DateContainer,
  DateInfo,
  Actions,
  ActionButton,
  ActionText,
} from './styles';

export default function DeliveryDetails({ navigation }) {
  const [delivery, setDelivery] = useState([]);
  const [recipient, setRecipient] = useState([]);

  const deliveryId = navigation.getParam('delivery');

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get(`deliveries/${deliveryId}`);
      setDelivery(response.data);
      setRecipient(response.data.recipient);
    }
    loadDelivery();
  }, [deliveryId]);

  function getStatus() {
    if (delivery.end_date) return 'Entregue';
    if (delivery.start_date) return 'Retirada';
    return 'Pendente';
  }

  function handleProblems(id) {
    if (delivery.end_date) {
      Alert.alert(
        'Falha',
        'Não é possível informar problemas em encomendas ja entregues'
      );
    } else {
      navigation.navigate('ReportProblems', {
        id,
      });
    }
  }

  function handleShow(id) {
    navigation.navigate('ShowProblems', {
      id,
    });
  }

  function handleConfirm(id) {
    if (delivery.end_date)
      Alert.alert('Falha', 'Essa encomenda ja foi entregue');
    if (!delivery.start_date)
      Alert.alert('Falha', 'Essa encomenda ainda não foi retirada');
    else
      navigation.navigate('ConfirmDelivery', {
        id,
      });
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Background />
      <DeliveryCard>
        <DeliveryHeader>
          <Icon name="local-shipping" size={24} color="#7D40E7" />
          <HeaderText>Informações de entrega</HeaderText>
        </DeliveryHeader>
        <DeliveryInfo>
          <InfoTitle>DESTINATÁRIO</InfoTitle>
          <Info>{recipient.name}</Info>

          <InfoTitle>ENDEREÇO DE ENTREGA</InfoTitle>
          <Info>
            {recipient.street}, {recipient.number}, {recipient.city} -{' '}
            {recipient.state}, {recipient.zipcode}
          </Info>

          <InfoTitle>PRODUTO</InfoTitle>
          <Info style={{ marginBottom: 0 }}>{delivery.product}</Info>
        </DeliveryInfo>
      </DeliveryCard>
      <StatusCard>
        <DeliveryHeader>
          <Icon name="event" size={24} color="#7D40E7" />
          <HeaderText>Situação de entrega</HeaderText>
        </DeliveryHeader>
        <InfoTitle>STATUS</InfoTitle>
        <Info>{getStatus()}</Info>
        <DateContainer>
          <DateInfo>
            <InfoTitle>DATA DE RETIRADA</InfoTitle>
            <Info style={{ marginBottom: 0 }}>
              {delivery.start_date
                ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
                : '- - / - - / - -'}{' '}
            </Info>
          </DateInfo>
          <DateInfo>
            <InfoTitle>DATA DE ENTREGA</InfoTitle>
            <Info style={{ marginBottom: 0 }}>
              {delivery.end_date
                ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
                : '- - / - - / - -'}
            </Info>
          </DateInfo>
        </DateContainer>
      </StatusCard>
      <Actions>
        <ActionButton onPress={() => handleProblems(deliveryId)}>
          <Icon name="highlight-off" size={24} color="#E74040" />
          <ActionText>{' Informar\nProblema'}</ActionText>
        </ActionButton>
        <ActionButton
          onPress={() => handleShow(deliveryId)}
          style={{
            borderLeftWidth: 1,
            borderLeftColor: '#0000001A',
            borderRightWidth: 1,
            borderRightColor: '#0000001A',
          }}
        >
          <Icon name="info-outline" size={24} color="#E7BA40" />
          <ActionText>{'Visualizar\nProblema'}</ActionText>
        </ActionButton>
        <ActionButton onPress={() => handleConfirm(deliveryId)}>
          <Icon name="alarm-on" size={24} color="#7D40E7" />
          <ActionText>{'Confirmar\n  Entrega'}</ActionText>
        </ActionButton>
      </Actions>
    </Container>
  );
}

DeliveryDetails.navigationOptions = ({ navigation }) => ({
  title: 'Detalhes da encomenda',
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

DeliveryDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func,
  }).isRequired,
};
