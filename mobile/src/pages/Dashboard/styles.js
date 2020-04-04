import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
`;

export const HeaderInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.View`
  margin-left: 12px;
`;

export const HeaderTitle = styled.Text`
  font-size: 15px;
  color: #666;
  line-height: 26px;
`;

export const HeaderName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  line-height: 29px;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const DeliveryStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 22px;
  align-items: center;
`;

export const DeliveryText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  line-height: 29px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
`;

export const StatusButton = styled.TouchableOpacity``;

export const StatusText = styled.Text`
  margin-left: 15px;
  font-size: 15px;
  font-weight: bold;
  line-height: 16px;
  color: ${(props) => (props.active ? '#7D40E7' : '#999')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
`;

export const Deliveries = styled.FlatList`
  border-radius: 4px;
`;

export const DeliveriesContainer = styled.View`
  border: 1px solid #eee;
  margin-top: 25px;
`;

export const DeliveriesHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const DeliveriesHeaderText = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 10px;
`;

export const ProgressBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  padding: 15px;
`;

export const ProgressLine = styled.View`
  height: 1px;
  background-color: #7d40e7;
  width: 45%;
`;

export const Dot = styled.View`
  border: 1px solid #7d40e7;
  border-radius: 6px;
  height: 12px;
  width: 12px;
  background-color: ${(props) => (props.active ? '#7D40E7' : 'white')};
`;

export const ProgressBarText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProgressText = styled.Text`
  padding: 15px;
  font-size: 11px;
  color: ${(props) => (props.active ? '#7d40e7' : '#999')};
  text-align: left;
`;

export const DeliveriesInfo = styled.View`
  background: #f8f9fd;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Info = styled.View``;

export const InfoTitle = styled.Text`
  font-size: 12px;
  color: #999;
  font-weight: bold;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const SubmitButton = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #7d40e7;
`;
