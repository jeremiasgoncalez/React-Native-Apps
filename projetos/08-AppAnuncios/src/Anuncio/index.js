import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles'
 
class Pessoa extends Component{
    render(){

      let img = this.props.avatar;
      let preco = parseFloat(this.props.data.preco);

      return(
        <View style={styles.container}>
          <View style={styles.areaPessoa}>
          <Text style={styles.superTitle}> {this.props.data.modelo} </Text>
            <Image source={{ uri: img }} style={styles.pic}/>
            
            <Text style={styles.textoPessoa}> <Text style={styles.title}>Cilindrada:</Text> {this.props.data.cilindrada}cc </Text>
            <Text style={styles.textoPessoa}> <Text style={styles.title}>Preço Sugerido:</Text> R${preco.toFixed(2)} </Text>
          </View>
        </View>
      );
    }
  }
 
export default Pessoa;
