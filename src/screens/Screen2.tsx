import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../types/navifgation';

type Screen2Props = StackScreenProps<StackParamList, 'Screen2'>;

const Screen2: React.FC<Screen2Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
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

export default Screen2;