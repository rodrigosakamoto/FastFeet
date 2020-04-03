import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
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
  font-size: 12px;
  color: #666;
  line-height: 26px;
`;

export const HeaderName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  line-height: 29px;
`;

export const HeaderButton = styled.TouchableOpacity``;
