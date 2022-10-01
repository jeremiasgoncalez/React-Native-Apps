import React, { Component } from 'react';
import { styles } from './styles';
import { Text, View } from 'react-native';

class Result extends Component {
  render() {
    let r = this.props.valueResult;
    if (r == 0) {
      return (
        <View>
          <Text style={styles.resultAlt}>Seu resultado aparecerá aqui. 😉</Text>
        </View>
      );
    }
    else if(r  > 0 && r <= 18.5 ){
      return (
        <View>
          <Text style={styles.lowWeight}>Abaixo do Peso</Text>
        </View>
      );
    }
    else if(r <= 24.9 ){
      return (
        <View>
          <Text style={styles.normalWeight}>Peso Normal</Text>
        </View>
      );
    }
    else if (r <= 29.9) {
      return (
        <View>
          <Text style={styles.overWeight}>Sobrepeso!</Text>
        </View>
      );
    } else if (r <= 34.9) {
      return (
        <View>
          <Text style={styles.highWeight}>Obesidade Grau I!</Text>
        </View>
      );
    } else if (r <= 39.9) {
      return (
        <View>
          <Text style={styles.higherWeight}>OIbesidade Grau II!</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.dangerWeight}>
            Obesidade Grau III ou Mórbida!
          </Text>
        </View>
      );
    }
  }
}
export default Result;
