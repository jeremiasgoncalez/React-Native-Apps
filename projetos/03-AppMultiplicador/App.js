import React, { Component } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      n1: 0,
      n2: 0,
    };

    this.produto = this.produto.bind(this);
    this.pegaN1 = this.pegaN1.bind(this);
    this.pegaN2 = this.pegaN2.bind(this);
  }

  produto() {
    let x = this.state.n1;
    let y = this.state.n2;
    this.setState({
      result: x * y,
    });
  }
  pegaN1(valor) {
    this.setState({ n1: valor });
  }

  pegaN2(valor) {
    this.setState({ n2: valor });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Multiplicador de Numeros</Text>

        <TextInput
          style={styles.entrada}
          placeholder="Digite o primeiro n°"
          onChangeText={this.pegaN1}
        />
        <TextInput
          style={styles.entrada}
          placeholder="Digite o segundo n°"
          onChangeText={this.pegaN2}
        />

        <Pressable style={styles.botao} onPress={() => this.produto()}>
          <Text style={styles.textoBtn}>Calcular</Text>
        </Pressable>
        <Text style={styles.resultado}>Resultado: {this.state.result}</Text>
      </View>
    );
  }
}

export default App;
