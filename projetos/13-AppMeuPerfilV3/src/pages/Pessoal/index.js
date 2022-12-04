import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

let img =
  'https://camo.githubusercontent.com/3326e06655e278dc28ab3c01b36254f2f56852ad9223347110dbe13fbb0b8e6b/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3833333535363932333530383332363432302f3936303030333034303431393634373438382f786176617461722d322e676966';

export default function Pessoal() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: img }} />
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
  img: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 75,
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
