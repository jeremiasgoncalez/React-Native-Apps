import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Pessoal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados pessoais:</Text>
      <Text style={styles.text}>Jeremias Alves Gonçalez</Text>
      <Text style={styles.text}>Resido em Mongaguá-SP</Text>
      <Text style={styles.text}>Canceriano, 23 anos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 20,
  },
  text: {
    color: '#2b7d64',
    fontSize: 18,
  },
});
