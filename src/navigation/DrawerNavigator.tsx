import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../containers/HomeScreen';
import MenuScreen from '../containers/MenuScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => (
  <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Menu" component={MenuScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;