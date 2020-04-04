import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';

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

export default function Dashboard() {
  const dispatch = useDispatch();
  const deliveryman = useSelector((state) => state.auth);

  const [status, setStatus] = useState(false);
  const [deliveries, setDeliveries] = useState([]);

  async function loadPending() {
    const response = await api.get(`deliverymans/${deliveryman.id}/status`);

    setDeliveries(response.data);
  }

  console.tron.log(deliveries);

  async function loadDelivered() {
    const response = await api.get(`deliverymans/${deliveryman.id}/deliveries`);

    setDeliveries(response.data);
  }

  useEffect(() => {
    loadPending();
  }, []);

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

  return (
    <Container>
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

              <SubmitButton>
                <ButtonText>Ver detalhes</ButtonText>
              </SubmitButton>
            </DeliveriesInfo>
          </DeliveriesContainer>
        )}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={20} color={tintColor} />
  ),
};
