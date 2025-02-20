import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../types/navifgation';

type Screen1Props = StackScreenProps<StackParamList, 'Screen1'>;

const Screen1: React.FC<Screen1Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Screen1;
