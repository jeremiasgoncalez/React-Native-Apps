import React, {Component} from 'react';
import react, {View, Text, TouchableOpacity, Linking} from 'react-native';
import {styles} from './styles';

export default class Vagas extends Component{
 
  render(){

    let salario = this.props.data.salario;

    return(
      
      <View style={styles.areaVaga}>
          <Text style={styles.tituloVaga}>{this.props.data.titulo}</Text>
          <Text style={styles.textoVaga}>SALÁRIO: R${salario.toFixed(2)}</Text>
          <Text style={styles.textoVaga}>DESCRIÇÃO: {this.props.data.descricao}</Text>
          <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Fstatic.gazetaesportiva.com%2Fuploads%2Fimagem%2F2022%2F10%2F20%2F52253431652_17d93683ba_o.jpg'
                  )
                }><Text style={styles.contatoVaga}>CONTATO: {this.props.data.contato}</Text></TouchableOpacity>
      </View>
    ); 
  }
}