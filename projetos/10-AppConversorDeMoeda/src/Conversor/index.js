import React, { Component } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { styles } from './styles.js';
import RNPickerSelect from 'react-native-picker-select';

class Conversor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: null,
      de: null,
      para: null,
      resultado: '--',
      moeda: 0,
      moedas: [
        { label: 'Real', value: 'Real' },
        { label: 'Dolar', value: 'Dolar' },
        { label: 'Euro', value: 'Euro' },
      ],
    };
    this.converter = this.converter.bind(this);
  }

  converter() {
    let valor = this.state.valor;
    let de = this.state.de;
    let para = this.state.para;

    if ((de != null) && (para != null) && (valor != null && valor != 0) ) {
      //CONVERSOES ENTRE DOLAR E REAL <><-><> #R$ US$
      if (de == 'Real' && para == 'Dolar') {
        this.setState({
          resultado: this.state.valor * 0.19,
        });
      }
      if (de == 'Dolar' && para == 'Real') {
        this.setState({
          resultado: this.state.valor * 5.38,
        });
      }
      //CONVERSOES ENTRE REAL E EURO <><-><> #R$ Eu$
      if (de == 'Real' && para == 'Euro') {
        this.setState({
          resultado: this.state.valor * 0.18,
        });
      }
      if (de == 'Euro' && para == 'Real') {
        this.setState({
          resultado: this.state.valor * 5.57,
        });
      }
      //CONVERSOES ENTRE DOLAR E EURO <><-><> #US$ Eu$
      if (de == 'Dolar' && para == 'Euro') {
        this.setState({
          resultado: this.state.valor * 0.97,
        });
      }
      if (de == 'Euro' && para == 'Dolar') {
        this.setState({
          resultado: this.state.valor * 1.03,
        });
      }
      if (de == para) {
        this.setState({
          resultado: this.state.valor * 1,
        });
      }
    }
    else{
      this.setState({
          resultado: 'Informe Valor ou Moeda válidos!',
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head1}>Conversor de Moedas</Text>
        <Text style={styles.head2}>Dolar, Euro e Real</Text>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>VALOR: </Text>

          <TextInput
            keyboardType="numeric"
            style={styles.inputItem}
            onChangeText={(value) => {
              this.setState({ valor: value });
            }}
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>DE: </Text>
          <RNPickerSelect
            style={styles.pickerStyle}
            onValueChange={(value) => {
              this.setState({ de: value });
            }}
            placeholder={{ label: 'Selecione', value: null }}
            items={this.state.moedas}
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>PARA: </Text>
          <RNPickerSelect
            style={styles.pickerStyle}
            onValueChange={(value) => {
              this.setState({ para: value });
            }}
            placeholder={{ label: 'Selecione', value: null }}
            items={this.state.moedas}
          />
        </View>
        <Pressable style={styles.button} onPress={this.converter}>
          <Text style={styles.buttonTxt}>Converter</Text>
        </Pressable>
        <Text style={styles.textResultado}>Resultado:</Text>
        <Text style={styles.textResultado}>{this.state.resultado}</Text>
      </View>
    );
  }
}

export default Conversor;
