import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  Avatar,
  HeaderInfo,
  HeaderText,
  HeaderTitle,
  HeaderName,
  HeaderButton,
} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const deliveryman = useSelector((state) => state.auth);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <HeaderInfo>
          <Avatar
            source={{
              uri: deliveryman.avatar
                ? deliveryman.avatar.url
                : `https://api.adorable.io/avatar/50/${provider.name}.png`,
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
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={20} color={tintColor} />
  ),
};
