
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/Screens/BottomTabs';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './src/store/CounterStore';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}