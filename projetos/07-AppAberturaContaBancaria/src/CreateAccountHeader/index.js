import React, { Component } from 'react';
import react, { View, StatusBar, Text } from 'react-native';

export default class CreateAccountHeader extends Component {
  render() {
    return (
        <View>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="#55544F"
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
          <Text
            style={{
              marginBottom: 35,
              paddingLeft: 8,
              paddingRight: 8,
              paddingVertical: 10,
              width: '100%',
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              color: 'white',
              backgroundColor: '#F8A20B',
            }}>
            | Abertura de Conta |
          </Text>
        </View>
    );
  }
}
