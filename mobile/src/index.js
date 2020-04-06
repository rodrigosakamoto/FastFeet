import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import '~/config/ReactotronConfig';

import 'react-native-gesture-handler';

import { store, persistor } from './store';
import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} />
      <App />
    </Provider>
  );
}
