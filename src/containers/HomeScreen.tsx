import React, { useState } from 'react';
import { View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import DrawerMenu from '../components/DrawerMenu';
import TabNavigator from '../navigation/TabNavigator';
import { styles } from '../styles';

const HomeScreen: React.FC = () => {
  const progress = useSharedValue(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: withTiming(progress.value ? 240 : 0, { duration: 500 }) },
      { rotateZ: withTiming(progress.value ? '-8deg' : '0deg', { duration: 500 }) },
      { scale: withTiming(progress.value ? 0.9 : 1, { duration: 500 }) },
    ],
    borderRadius: withTiming(progress.value ? 20 : 0, { duration: 500 }),
  }));

  return (
    <View style={styles.container}>
      <DrawerMenu selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} closeDrawer={() => (progress.value = 0)} />
      <Animated.View style={[styles.mainScreen, styles.tabs, animatedStyle]}>
        <TabNavigator progress={progress} />
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
