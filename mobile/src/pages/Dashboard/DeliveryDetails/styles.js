import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Background = styled.View`
  background: #7d40e7;
  height: 140px;
`;

export const DeliveryCard = styled.View`
  position: absolute;
  background: #fff;
  width: 90%;
  align-self: center;
  margin-top: 70px;
  padding: 15px;
  border: 1px solid #0000001a;
  border-radius: 4px;
`;

export const DeliveryHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 5px;
`;

export const DeliveryInfo = styled.View`
  margin-top: 5px;
`;

export const InfoTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
  margin-bottom: 5px;
`;

export const Info = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
`;

export const StatusCard = styled.View`
  width: 90%;
  margin-top: 190px;
  border: 1px solid #0000001a;
  border-radius: 4px;
  background-color: white;
  flex-direction: column;
  align-self: center;
  padding: 15px;
`;

export const DateInfo = styled.View`
  flex-direction: column;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Actions = styled.View`
  flex-direction: row;
  background: #f8f9fd;
  border: 1px solid #0000001a;
  margin-top: 5px;
  justify-content: space-around;
  align-self: center;
  width: 90%;
`;

export const ActionButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
`;

export const ActionText = styled.Text`
  font-size: 14px;
  color: #999;
`;
