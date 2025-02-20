import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import Contact from '../screens/ContactScreen';
import HeaderButton from '../components/HeaderButton';
import Animated from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

interface TabNavigatorProps {
  progress: Animated.SharedValue<number>;
}

const TabNavigator: React.FC<TabNavigatorProps> = ({ progress }) => {
  const toggleDrawer = () => (progress.value = progress.value ? 0 : 1);

  return (
    <Tab.Navigator   
    screenOptions={{
      headerShown: true,
      headerStyle: {elevation: 0},
      tabBarLabelPosition: 'beside-icon',
      tabBarLabelStyle: {fontWeight: '500', fontSize: 18},
      tabBarIconStyle: {display: 'none'},
    }}>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{ headerLeft: () => <HeaderButton toggleDrawer={toggleDrawer} /> }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{ headerLeft: () => <HeaderButton toggleDrawer={toggleDrawer} /> }}
      />
    </Tab.Navigator>
  );
};

export default React.memo(TabNavigator);