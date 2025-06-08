import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export default function SectionTitle({ children, style, ...props }: TextProps) {
  return (
    <Text style={[styles.title, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
    marginTop: 0,
  },
}); 