import React, { useState, useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';
import api from '~/services/api';

import {
  Container,
  Header,
  Avatar,
  HeaderInfo,
  HeaderText,
  HeaderTitle,
  HeaderName,
  HeaderButton,
  DeliveryStatus,
  DeliveryText,
  StatusContainer,
  StatusButton,
  StatusText,
  Deliveries,
  DeliveriesContainer,
  DeliveriesHeader,
  DeliveriesHeaderText,
  ProgressBar,
  ProgressLine,
  Dot,
  ProgressBarText,
  ProgressText,
  DeliveriesInfo,
  Info,
  InfoText,
  InfoTitle,
  SubmitButton,
  ButtonText,
} from './styles';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  const deliveryman = useSelector((state) => state.auth);

  const [status, setStatus] = useState(false);
  const [deliveries, setDeliveries] = useState([]);
  const [refresh, setRefresh] = useState(false);

  async function loadDelivered() {
    const response = await api.get(`deliverymans/${deliveryman.id}/deliveries`);

    setDeliveries(response.data);
  }

  async function loadPending() {
    const response = await api.get(`deliverymans/${deliveryman.id}/status`);

    setDeliveries(response.data);
    setRefresh(false);
  }

  useEffect(() => {
    loadPending();
  }, [deliveryman.id]);

  function handleLogout() {
    dispatch(signOut());
  }

  function handleDelivered() {
    setStatus(true);
    loadDelivered();
  }

  function handlePending() {
    setStatus(false);
    loadPending();
  }

  function handleDetails(delivery) {
    navigation.navigate('DeliveryDetails', {
      delivery,
    });
  }

  async function handleWithdraw(delivery) {
    try {
      await api.put(`deliveries/status/${deliveryman.id}/${delivery}`);
      Alert.alert('Sucesso', 'Encomenda retirada com sucesso');
      navigation.navigate('DeliveryDetails', {
        delivery,
      });
    } catch (err) {
      Alert.alert('Falha', 'Não foi possivel retirar a encomenda');
    }
  }

  function refreshList() {
    setRefresh(true);
    loadPending();
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Header>
        <HeaderInfo>
          <Avatar
            source={{
              uri: deliveryman.avatar
                ? deliveryman.avatar.url
                : `https://api.adorable.io/avatar/50/${deliveryman.name}.png`,
            }}
          />
          <HeaderText>
            <HeaderTitle>Bem vindo de volta,</HeaderTitle>
            <HeaderName>{deliveryman.name}</HeaderName>
          </HeaderText>
        </HeaderInfo>
        <HeaderButton onPress={handleLogout}>
          <Icon name="exit-to-app" size={24} color="#E74040" />
        </HeaderButton>
      </Header>
      <DeliveryStatus>
        <DeliveryText>Entregas</DeliveryText>
        <StatusContainer>
          <StatusButton>
            <StatusText active={!status} onPress={handlePending}>
              Pendentes
            </StatusText>
          </StatusButton>
          <StatusButton>
            <StatusText active={status} onPress={handleDelivered}>
              Entregues
            </StatusText>
          </StatusButton>
        </StatusContainer>
      </DeliveryStatus>
      <Deliveries
        data={deliveries}
        onRefresh={refreshList}
        refreshing={refresh}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <DeliveriesContainer>
            <DeliveriesHeader>
              <Icon name="local-shipping" size={24} color="#7D40E7" />
              <DeliveriesHeaderText>Encomenda {item.id}</DeliveriesHeaderText>
            </DeliveriesHeader>
            <ProgressBar>
              <Dot active="true" />
              <ProgressLine />
              <Dot active={item.start_date} />
              <ProgressLine />
              <Dot active={item.end_date} />
            </ProgressBar>
            <ProgressBarText>
              <ProgressText active="true">{`Aguardando\nRetirada`}</ProgressText>
              <ProgressText active={item.start_date}>Retirada</ProgressText>
              <ProgressText active={item.end_date}>Entregue</ProgressText>
            </ProgressBarText>
            <DeliveriesInfo>
              <Info>
                <InfoTitle>Data</InfoTitle>
                <InfoText>
                  {format(parseISO(item.createdAt), 'dd/MM/yyyy')}
                </InfoText>
              </Info>

              <Info>
                <InfoTitle>Cidade</InfoTitle>
                <InfoText>{item.recipient.city}</InfoText>
              </Info>
              {item.start_date ? (
                <SubmitButton onPress={() => handleDetails(item.id)}>
                  <ButtonText>Ver detalhes</ButtonText>
                </SubmitButton>
              ) : (
                <SubmitButton onPress={() => handleWithdraw(item.id)}>
                  <ButtonText>Retirar encomenda</ButtonText>
                </SubmitButton>
              )}
            </DeliveriesInfo>
          </DeliveriesContainer>
        )}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  headerShown: false,
};

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
