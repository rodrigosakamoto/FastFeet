import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Background = styled.View`
  background: #7d40e7;
  height: 140px;
`;

export const SubmitButton = styled(Button)`
  background: #7d40e7;
  margin-top: 450px;
  width: 90%;
  align-self: center;
`;

export const ContainerCamera = styled.View`
  position: absolute;
  margin-top: 70px;
  width: 90%;
  height: 500px;
  align-self: center;
`;

//

export const Content = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Thumbnail = styled.Image`
  width: 90%;
  height: 500px;
  position: absolute;
  background: #fff;
  align-self: center;

  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  width: 90%;
`;

export const TakePhoto = styled.TouchableOpacity`
  top: 400px;
  background: #666;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const TakeAgain = styled.TouchableHighlight`
  top: 400px;
  background: #666;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  position: absolute;
  align-self: center;
`;

export const CameraContainer = styled.View`
  width: 100%;
  height: 500px;
  position: absolute;
  background: #fff;
  align-self: center;

  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
