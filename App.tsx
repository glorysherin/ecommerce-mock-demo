
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/Screens/BottomTabs';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import './src/db/database'
import { store, persistor } from './src/store/CounterStore';
import { SetUpDataBase } from './src/db/database';
import { addUser, getUsers } from './src/db/users';
import { seedUsers } from './src/StaticData';

export default function App() {
  useEffect(() => {
    async function init() {
    SetUpDataBase();
    seedUsers() 
  //    await addUser('glory','chennai')
  // await addUser('sherin','chennai')
  const users = await getUsers();
//  console.log('FINAL USERS:', users)
    }
    init()
}, [])

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