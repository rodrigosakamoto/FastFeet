import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  padding: 35px;
  background: #fff;
  flex: 1;
  text-align: left;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 80px;
  margin-bottom: 30px;
`;

export const DeliverymanTitle = styled.Text`
  font-size: 12px;
  color: #666;
  margin-top: 15px;
`;

export const DeliverymanInfo = styled.Text`
  font-size: 22px;
  color: #444;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 30px;
  background: #e74040;
`;
