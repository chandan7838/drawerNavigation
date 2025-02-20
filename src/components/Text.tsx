import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface TextComp extends TextProps {
  children: React.ReactNode;
  style?: object;
}

const TextComp: React.FC<TextProps> = ({ children, style, ...props }) => {
  return <Text style={[styles.text, style]} {...props}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default TextComp;
