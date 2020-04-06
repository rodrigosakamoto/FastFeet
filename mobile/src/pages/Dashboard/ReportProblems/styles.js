import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Background = styled.View`
  background: #7d40e7;
  height: 140px;
`;

export const InputContainer = styled.View`
  position: absolute;
  align-self: center;
  margin-top: 70px;
  border-radius: 4px;
  background: #fff;
  width: 90%;
  height: 300px;
  border: 1px solid #0000001a;
`;

export const InputProblem = styled.TextInput`
  justify-content: flex-start;
  padding: 20px;
  font-size: 16px;
`;

export const SubmitButton = styled(Button)`
  margin: 20px;
  background: #7d40e7;
  margin-top: 250px;
`;
