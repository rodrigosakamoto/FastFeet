import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { RNCamera } from 'react-native-camera';
import api from '~/services/api';

import {
  Container,
  Background,
  SubmitButton,
  ContainerCamera,
  Thumbnail,
  Camera,
  TakePhoto,
  CameraContainer,
} from './styles';

export default function ConfirmDelivery({ navigation }) {
  const deliveryId = navigation.getParam('id');
  const deliveryman = useSelector((state) => state.auth);

  const [file, setFile] = useState(null);
  const [camera, setCamera] = useState(null);

  async function handleTakePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
      };
      const data = await camera.takePictureAsync(options);
      setFile(data.uri);
    }
  }

  async function handleSubmit() {
    try {
      const dataFile = new FormData();

      dataFile.append('file', {
        uri: file,
        type: 'image/jpeg',
        name: 'signature.jpg',
      });

      await api.put(
        `deliveries/delivered/${deliveryman.id}/${deliveryId}`,
        dataFile
      );
      Alert.alert('Entrega efetuada com sucesso');
      navigation.navigate('DeliveryDetails');
    } catch (err) {
      Alert.alert('Erro ao confirmar entrega');
    }
  }

  return (
    <Container>
      <Background />
      <ContainerCamera>
        {file ? (
          <>
            <Thumbnail source={{ uri: file }} />
          </>
        ) : (
          <>
            <CameraContainer>
              <Camera
                ref={(ref) => {
                  setCamera(ref);
                }}
                type={RNCamera.Constants.Type.back}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                captureAudio={false}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                  title: 'Permissão para usar a câmera',
                  message: 'Precisamos de permissão para usar sua câmera',
                  buttonPositive: 'OK',
                  buttonNegative: 'Cancelar',
                }}
              />
              <TakePhoto onPress={handleTakePicture}>
                <Icon name="photo-camera" size={40} color="#aaa" />
              </TakePhoto>
            </CameraContainer>
          </>
        )}
      </ContainerCamera>
      <SubmitButton onPress={() => handleSubmit(file)}>Enviar</SubmitButton>
    </Container>
  );
}

ConfirmDelivery.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar entrega',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={25} color="#fff" />
    </TouchableOpacity>
  ),
});

ConfirmDelivery.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func,
  }).isRequired,
};
