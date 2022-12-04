import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

let img =
  'https://sites.google.com/site/gepgfatec/_/rsrc/1353506070915/config/customLogo.gif?revision=1';

export default function Formacao() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: img }} />
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
  img: {
    width: 220,
    height: 80,
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
