import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './Styles';

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /*
    let nome = this.props.nome;
    let idade = this.props.idade;
    let genero = this.props.genero;
    let escolaridade = this.props.escolaridade;
    let limite = this.props.limite;
    let nacionalidade = this.props.nacionalidade;
    let brasileiro = '';
*/
    let nome = this.props.nome;
    let idade = this.props.idade;
    let genero = this.props.genero;
    let escolaridade = this.props.escolaridade;
    let limite = this.props.limite;
    let nacionalidade = this.props.nacionalidade;
    let brasileiro = '';

    if(nacionalidade == true){
      brasileiro = 'Sim';
    }
    else{
      brasileiro = 'Nao';
    }
    
    return (
      <View style={styles.container}>
        <Text style={styles.textLabel}>Nome: {nome}</Text>
        <Text style={styles.textLabel}>Idade: {idade}</Text>
        <Text style={styles.textLabel}>Genero: {genero}</Text>
        <Text style={styles.textLabel}>Escolaridade: {escolaridade}</Text>
        <Text style={styles.textLabel}>Limite: {limite}</Text>
        <Text style={styles.textLabel}>Brasileiro: {brasileiro}</Text>
      </View>
    );
  }
}
