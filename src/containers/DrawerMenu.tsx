import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';
import Text from '../components/Text';

const drawerItems = ['Home', 'Favorites', 'Orders', 'Sign Out'];

interface DrawerMenuProps {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  closeDrawer: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = React.memo(({ selectedIndex, setSelectedIndex, closeDrawer }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.drawer}>
      <Text style={styles.appName}>Beka</Text>
      {drawerItems.map((data, index) => (
        <TouchableOpacity
          key={index}
          style={index === selectedIndex ? styles.drawerItem : undefined}
          onPress={() => {
            setSelectedIndex(index);
            if (index > 0 && index < drawerItems.length - 1) {
              navigation.navigate('Menu', { screen: data });
            }
            closeDrawer();
          }}>
          <Text style={styles.menuItem}>{data}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
});

export default DrawerMenu;
