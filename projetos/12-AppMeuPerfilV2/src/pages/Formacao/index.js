import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Formacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação:</Text>
      <Text style={styles.text}>Superior Cursando(FATEC)</Text>
      <Text style={styles.text}>Técnico em Administração(ETEC)</Text>
      <Text style={styles.text}>Certificação C# .Net</Text>
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
