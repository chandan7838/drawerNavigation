import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const Orders: React.FC = () => (
  <View style={styles.screen}>
    <Button title={'Orders'} />
  </View>
);

const Favorites: React.FC = () => (
  <View style={styles.screen}>
    <Button title={'Favorites'} />
  </View>
);

const MenuScreen: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Orders" component={Orders} />
    <Stack.Screen name="Favorites" component={Favorites} />
  </Stack.Navigator>
);

export default MenuScreen;

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%',
  },
});