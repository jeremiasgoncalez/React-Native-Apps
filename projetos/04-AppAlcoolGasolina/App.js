import React, {Component} from 'react';
import {View, Text, Image, TextInput, Pressable} from 'react-native';
import {styles} from './Styles.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      result: 0,
      alcool: 0,
      gas: 0,
    };

    this.verify = this.verify.bind(this);
    this.getAlcool = this.getAlcool.bind(this);
    this.getGas = this.getGas.bind(this);

  }

  verify(){
    let alc = this.state.alcool;
    let g = this.state.gas;
    if(alc != 0 && g != 0){
      this.setState({
        result: alc / g,
      });
    }
    else{
      alert("O valor não pode ser R$0,00.");
    }
  }

  getAlcool(value){
    this.setState({
      alcool: value,
    });
  }

  getGas(value){
    this.setState({
      gas: value,
    });
  }

  render(){
    
    let img = 'https://s2.glbimg.com/TdgkJuRE5p6RYWYci6oUBwizuLw=/0x0:972x647/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/V/6/VxVkRPT7SWu9sGB9RL8A/3.glbimg.com-v1-auth-0ae9f161c1ff459593599b7ffa1a1292-images-escenic-2022-6-23-22-1656033747650.png';



    return(
      
      <View style={styles.container}>

      <Text style={styles.title}>
        Álcool ou Gasolina
      </Text>

      <Image 
      source={{uri:img}}
      style={styles.mainImg}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Preço do Álcoool"
        onChangeText={this.getAlcool}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Preço da Gasolina"
        onChangeText={this.getGas}
        keyboardType="numeric"
      />

      <Pressable 
      style={styles.button}
      onPress={this.verify}>
      <Text style={styles.textButton}>
        Verificar
      </Text>
      </Pressable>
  
      <Result testResult = {this.state.result} />

      </View>

    );
  }
}

class Result extends Component{

  render(){
  
    let r = this.props.testResult;
    if(r <= 0.7){
    return(
      <View>
        <Text style={styles.alcoolResult}>
          ({r.toFixed(2)}) Prefira Etanol!
        </Text>
      </View>
    );
    }
    else{
      return(

        <View>
          <Text style={styles.gasResult}>
          ({r.toFixed(2)}) Prefira Gasolina!
        </Text>
      </View>

      );
    }
  }
}

export default App;