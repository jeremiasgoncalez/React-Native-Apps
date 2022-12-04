import React, { Component } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import Pessoa from './src/Anuncio';
import { styles } from './Styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1,
          avatar: 'https://img2.icarros.com/dbimg/imgmodelo/1/2483_4.png',
          modelo: 'PCX DLX ABS',
          cilindrada: 160,
          preco: '17400.00',
        },
        {
          id: 2,
          avatar: 'https://img1.icarros.com/dbimg/imgmodelo/1/2644_3.png',
          modelo: 'CG 160 TITAN',
          cilindrada: 160,
          preco: '15060.00',
        },
        {
          id: 3,
          avatar: 'https://img2.icarros.com/dbimg/imgmodelo/1/1991_6.png',
          modelo: 'POP 110i',
          cilindrada: 110,
          preco: '8330.00',
        },
        {
          id: 4,
          avatar: 'https://img0.icarros.com/dbimg/imgmodelo/1/2682_3.png',
          modelo: 'XRE 300',
          cilindrada: 300,
          preco: '24350.00',
        },
        {
          id: 5,
          avatar: 'https://img1.icarros.com/dbimg/imgmodelo/1/2650_5.png',
          modelo: 'CB 250F TWISTER',
          cilindrada: 250,
          preco: 19590,
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Anúncios</Text>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.feed}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pessoa avatar={item.avatar} data={item} />
            )}
          />
        </View>
      </View>
    );
  }
}

export default App;
