import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

interface HeaderButtonProps {
  toggleDrawer: () => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ toggleDrawer }) => (
  <TouchableOpacity onPress={toggleDrawer}>
    <Image style={styles.image} source={require('../utils/images/hamburger_icon.png')} />
  </TouchableOpacity>
);

export default React.memo(HeaderButton);

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    margin: 10,
  },
});
