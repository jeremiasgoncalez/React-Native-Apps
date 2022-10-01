import React, { Component } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.remove = this.remove.bind(this);

    this.add = this.add.bind(this);

    this.clear = this.clear.bind(this);
  }

  add() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  remove() {
    let qtd = this.state.counter;
    if (qtd > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  }
  clear() {
    let qtd = this.state.counter;
    if (qtd > 0) {
      this.setState({
        counter: 0,
      });
      Alert.alert(null, '✅ Tudo Limpo! 😉👌');
    } else {
      Alert.alert(null, '⚠️ O contador já está vazio... 😳');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}> Contador de Pessoas</Text>

        <Text style={styles.qtdDisplay}> {this.state.counter} </Text>

        <Pressable style={styles.botaoMais} onPress={() => this.add()}>
          <Text style={styles.textoBotao}> + </Text>
        </Pressable>
        <Pressable
          style={styles.botaoMenos}
          onPress={this.remove}
          onLongPress={() => this.setState({counter: 0})}>
          <Text style={styles.textoBotao}> - </Text>
        </Pressable>
      </View>
    );
  }
}

export default App;
