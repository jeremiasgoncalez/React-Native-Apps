import React, { Component } from 'react';
import { Text, View, Image, TextInput, Pressable } from 'react-native';
import { styles } from './styles';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      height: 0,
      result: 0,
    };

    this.verify = this.verify.bind(this);
    this.getWeight = this.getWeight.bind(this);
    this.getHeight = this.getHeight.bind(this);
  }

  verify() {
    let w = this.state.weight;
    let h = this.state.height;
    if (w != 0 && h != 0) {
      this.setState({
        result: w / (h * h),
      });
    }
    else{
      alert("Os valores não podem ser 0!")
    }
  }

  getWeight(value) {
    this.setState({
      weight: value,
    });
  }

  getHeight(value) {
    this.setState({
      height: value,
    });
  }

  render() {
    let img =
      'https://s2.glbimg.com/MMh_PMiMdkfnDqRfHoDdB7otNjM=/0x0:836x1254/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/X/a/uo1qZpTWmDttOPss5O9Q/nutricionista-paciente-dieta.jpg';

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cálculo do IMC</Text>

        <Image source={{ uri: img }} style={styles.picture} />

        <TextInput
          placeholder="Peso (kg)"
          style={styles.textInput}
          onChangeText={this.getWeight}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Altura (m)"
          style={styles.textInput}
          onChangeText={this.getHeight}
          keyboardType="numeric"
        />

        <Pressable style={styles.button} onPress={this.verify}>
          <Text style={styles.textButton}>Verificar</Text>
        </Pressable>
        
        <Result valueResult = {this.state.result} />

      </View>
    );
  }
}


export default App;
