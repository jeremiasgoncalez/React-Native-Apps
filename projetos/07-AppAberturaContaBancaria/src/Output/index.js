import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export default class Output extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {

    let name = this.props.name;
    let age = this.props.age;
    let genrer = this.props.genrer;
    let education = this.props.education;
    let limit = this.props.limit;
    let nacionality = this.props.nacionality;
    let brazilian = '';

    if(nacionality == true) {
      brazilian = 'Sim';
    }
    else{
      brazilian = 'Não'
    }
  
    return (
        <View style={styles.container}>
          <Text style={styles.headline}>
            Dados Informados:
          </Text>
          <View style={styles.outView}>
          <Text style={styles.title}>
            Nome:
          </Text>
          <Text style={styles.text}>
          {name}
          </Text>
          </View>
          <View style={styles.outView}>
          <Text style={styles.title}>
            Idade:
          </Text>
          <Text style={styles.text}>
          {age}
          </Text>
          </View>
          <View style={styles.outView}>
          <Text style={styles.title}>
            Gênero:
          </Text>
          <Text style={styles.text}>
          {genrer}
          </Text>
          </View>
          <View style={styles.outView}>
          <Text style={styles.title}>
            Escolaridade:
          </Text>
          <Text style={styles.text}>
          {education}
          </Text>
          </View>
          <View style={styles.outView}>
          <Text style={styles.title}>
            Limite Solicitado:
          </Text>
          <Text style={styles.text}>
          R$ {limit.toFixed(2)}
          </Text>
          </View>
          <View style={styles.outView}>
          <Text style={styles.title}>
            Brasileiro:
          </Text>
          <Text style={styles.text}>
          {brazilian}
          </Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    margin: 20,
  },
  outView: {
    flexDirection: 'row',
  },  
  headline: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'blue',
  },
  title: {
    marginBottom: 2,
    fontWeight: 'bold',
    fontSize: 12,
    paddingRight: 14,

  },
  text: {
    marginBottom: 2,
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export { styles };