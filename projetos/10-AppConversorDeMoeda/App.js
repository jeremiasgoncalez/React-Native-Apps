import React, { Component } from 'react';
import {
  View, ImageBackground
} from 'react-native';
import { styles } from './Styles.js';
import Conversor from './src/Conversor';


const image = {
  uri: 'https://wallpapercrafter.com/th/322674-Man-Made-Dollar-Phone-Wallpaper.jpg',
};

class App extends Component {

  render() {
    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Conversor />
      </View>
      </ImageBackground>
    );
  }
}

export default App;