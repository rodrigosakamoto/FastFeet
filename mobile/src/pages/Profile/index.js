import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Avatar,
  DeliverymanTitle,
  DeliverymanInfo,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const deliveryman = useSelector((state) => state.auth);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: deliveryman.avatar
            ? deliveryman.avatar.url
            : `https://api.adorable.io/avatar/50/${provider.name}.png`,
        }}
      />

      <DeliverymanTitle>Nome completo</DeliverymanTitle>
      <DeliverymanInfo>{deliveryman.name}</DeliverymanInfo>

      <DeliverymanTitle>Email</DeliverymanTitle>
      <DeliverymanInfo>{deliveryman.email}</DeliverymanInfo>

      <DeliverymanTitle>Data de cadastro</DeliverymanTitle>
      <DeliverymanInfo>
        {format(parseISO(deliveryman.created_at), 'dd/MM/yyyy')}
      </DeliverymanInfo>

      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" size={20} color={tintColor} />
  ),
};
