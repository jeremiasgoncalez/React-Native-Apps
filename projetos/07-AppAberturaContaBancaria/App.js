import React, { Component } from 'react';
import react, { View, ScrollView } from 'react-native';
import People from './src/People/index';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whatever: 0
    };
  }

  render() {

    return (
      <ScrollView>
      <View>
        
          <People />

      </View>
      </ScrollView>
    );
  }
}
