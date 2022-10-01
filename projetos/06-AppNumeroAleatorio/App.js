import React, { Component, useState, useEffect } from 'react';
import { Text, View, Image, SafeAreaView, Pressable } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      result: '',
    });

    this.randomize = this.randomize.bind(this);
  }

  randomize() {
    this.setState({
      result: Math.floor(Math.random() * 10 + 1),
    });
  }

  render() {
    let img =
      'https://superlegalbrinquedos.vteximg.com.br/arquivos/ids/199622-1000-1000/Bloco-ponto-de-Interrogacao-4.png?v=637824420915930000';

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Jogo do N° Aleatório</Text>

          <Image source={{ uri: img }} style={styles.picture} />

          <Blink />

          <Text style={styles.result}>{this.state.result}</Text>

          <Pressable style={styles.button} onPress={this.randomize}>
            <Text style={styles.textButton}>Descobrir</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
}

const Blink = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 500);
  }, []);
  return (
    <View>
      <Text style={[styles.textBlink, { display: showText ? 'none' : 'flex' }]}>
        Pense em um N° de 0 a 10...
      </Text>
    </View>
  );
};

export default App;
