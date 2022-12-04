import React, { Component } from 'react';
import react, { ScrollView, SafeAreaView, StatusBar} from 'react-native';
import NovaConta from './src/NovaConta/Index';

class App extends Component {
  render() {
    return (
      <ScrollView>
        <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="#55544F"
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
        <NovaConta />
      </ScrollView>
    );
  }
}

export default App;
