import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Background = styled.View`
  background: #7d40e7;
  height: 140px;
`;

export const Title = styled.Text`
  position: absolute;
  margin-top: 60px;
  align-self: center;
  font-weight: bold;
  color: white;
  font-size: 18px;
`;

export const ProblemListContainer = styled.View`
  position: absolute;
  margin-top: 100px;
  width: 90%;
  align-self: center;
`;

export const ProblemList = styled.FlatList``;

export const ProblemContainer = styled.View`
  background: #fff;
  margin-top: 10px;
  border: 1px solid #0000001a;
  border-radius: 4px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProblemText = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const ProblemDate = styled.Text`
  font-size: 14px;
  color: #c1c1c1;
`;
