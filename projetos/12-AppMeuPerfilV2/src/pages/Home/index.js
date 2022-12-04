import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

let img =
  'https://camo.githubusercontent.com/3326e06655e278dc28ab3c01b36254f2f56852ad9223347110dbe13fbb0b8e6b/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3833333535363932333530383332363432302f3936303030333034303431393634373438382f786176617461722d322e676966';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: img }} />
      <Text style={styles.text}>Jeremias Alves Gonçalez</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 150,
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: 3,
    alignSelf: 'center',
    marginTop: 10,
  },
});
