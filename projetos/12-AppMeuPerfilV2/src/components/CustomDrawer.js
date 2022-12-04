import React from 'react';
import { View, Text, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

let img = 'https://avatars.githubusercontent.com/u/65372780?v=4';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Image style={styles.profilePicture} source={{ uri: img }} />
      </View>
      <View>
        <Text style={styles.name}>Jeremias Alves Gonçalez</Text>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontWeight: 'bold',
    marginVertical: 20,
    alignSelf: 'center',
    fontSize: 20,
  },
});
