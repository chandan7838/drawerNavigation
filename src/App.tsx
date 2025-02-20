import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigator';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <DrawerNavigator />
  </NavigationContainer>
);

export default App;
