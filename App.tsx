import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Button,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {StatusBar} from 'react-native';

// 📌 Get Screen Dimensions
const {width, height} = Dimensions.get('window');
const drawerItems = ['Home', 'Favorites', 'Orders', 'Sign Out'];

// 📌 Define Navigation Types
type StackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

type MenuStackParamList = {
  Orders: undefined;
  Favorites: undefined;
};

type TabParamList = {
  Home: undefined;
  Contact: undefined;
};

type DrawerParamList = {
  Home: undefined;
  Menu: undefined;
};

// 📌 Dummy Screens with TypeScript Props
const Screen1: React.FC<StackScreenProps<StackParamList, 'Screen1'>> = ({
  navigation,
}) => (
  <View style={styles.screen}>
    <Button onPress={() => navigation.navigate('Screen2')} title={'Screen 1'} />
  </View>
);

const Screen2: React.FC<StackScreenProps<StackParamList, 'Screen2'>> = ({
  navigation,
}) => (
  <View style={styles.screen}>
    <Button onPress={() => navigation.navigate('Screen1')} title={'Screen 2'} />
  </View>
);

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

const Contact: React.FC = () => (
  <View style={styles.screen}>
    <Text>Contact Screen</Text>
  </View>
);

// 📌 Stack Navigators
const Stack = createStackNavigator<StackParamList>();
const HomeStack: React.FC = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="Screen2" component={Screen2} />
  </Stack.Navigator>
);

const MenuStack = createStackNavigator<MenuStackParamList>();
const MenuStackScreen: React.FC = () => (
  <MenuStack.Navigator screenOptions={{headerShown: false}}>
    <MenuStack.Screen name="Orders" component={Orders} />
    <MenuStack.Screen name="Favorites" component={Favorites} />
  </MenuStack.Navigator>
);

// 📌 Bottom Tab Navigator
const Tab = createBottomTabNavigator<TabParamList>();
const TabNavigator: React.FC<{progress: Animated.SharedValue<number>}> = ({
  progress,
}) => (
  <Tab.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: {elevation: 0},
      tabBarLabelPosition: 'beside-icon',
      tabBarLabelStyle: {fontWeight: '500', fontSize: 18},
      tabBarIconStyle: {display: 'none'},
    }}>
    <Tab.Screen
      options={{
        headerTitleStyle: {color: 'grey', fontSize: 28},
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => (progress.value = progress.value ? 0 : 1)}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require('./images/hamburger_icon.png')}
            />
          </TouchableOpacity>
        ),
      }}
      name="Home"
      component={HomeStack}
    />
    <Tab.Screen
      options={{
        headerTitleStyle: {color: 'grey', fontSize: 28},
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => (progress.value = progress.value ? 0 : 1)}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require('./images/hamburger_icon.png')}
            />
          </TouchableOpacity>
        ),
      }}
      name="Contact"
      component={Contact}
    />
  </Tab.Navigator>
);

// 📌 Drawer Animation & Main Screen
const HomeScreen: React.FC = () => {
  const progress = useSharedValue(0);
  const navigation =
    useNavigation<DrawerScreenProps<DrawerParamList>['navigation']>();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(progress.value ? width * 0.6 : 0, {
          duration: 500,
        }),
      },
      {rotateZ: withTiming(progress.value ? '-8deg' : '0deg', {duration: 500})},
      {scale: withTiming(progress.value ? 0.9 : 1, {duration: 500})},
    ],
    borderRadius: withTiming(progress.value ? 20 : 0, {duration: 500}),
  }));

  return (
    <View style={styles.container}>
      <View style={styles.drawer}>
        <Text style={styles.appName}>Beka</Text>
        {drawerItems.map((data, index) => (
          <TouchableOpacity
            key={index}
            style={index === selectedIndex ? styles.drawerItem : undefined}
            onPress={() => {
              setSelectedIndex(index);
              if (index !== 0 && index !== drawerItems.length - 1) {
                navigation.navigate('Menu', {screen: data});
              }
              progress.value = 0;
              navigation.dispatch(DrawerActions.closeDrawer());
            }}>
            <Text style={styles.menuItem}>{data}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Animated.View style={[styles.mainScreen, styles.tabs, animatedStyle]}>
        <TabNavigator progress={progress} />
      </Animated.View>
    </View>
  );
};

// 📌 Drawer Navigator
const Drawer = createDrawerNavigator<DrawerParamList>();

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle="dark-content"
    />
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Menu" component={MenuStackScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;

// 📌 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
  },
  drawer: {
    flex: 1,
    position: 'absolute',
    width: width + 100,
    height: height + 100,
    backgroundColor: '#1A1A2E',
    paddingTop: 80,
    borderRadius: 20,
    paddingLeft: 10,
  },
  menuItem: {
    fontSize: 20,
    color: 'white',
    marginVertical: 15,
    paddingLeft: 16,
  },
  mainScreen: {
    flex: 1,
    backgroundColor: 'white',
    width: width + 60,
    height: height + 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  image: {
    width: 40,
    height: 40,
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 60,
    left: 20,
  },
  tabs: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 20,
    overflow: 'hidden',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  appName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 900,
    marginLeft: 40,
    marginBottom: 20,
  },
  headerText: {
    color: 'grey',
    fontSize: 22,
    marginLeft: 20,
  },
  drawerItem: {
    backgroundColor: '#301F2C',
    borderRadius: 12,
    width: 140,
  },
  screen: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%',
  },
});
