import React, { Component } from 'react';
import { View, Text, Switch, StatusBar, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Darklg from './src/Tema/Dark/darkLg.js';
import Darksm from './src/Tema/Dark/darkSm.js';
import Lightlg from './src/Tema/Light/lightLg.js';
import Lightsm from './src/Tema/Light/lightSm.js';
import { styles } from './Styles.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dia: true,
      pequeno: true,
    };
    this.onDayChange = this.onDayChange.bind(this);
    this.onPeqChange = this.onPeqChange.bind(this);
    this.rnder = this.rnder.bind(this);
  }

  // Quando o componente é montado em tela (quando abrimos o App)
  async componentDidMount() {
    await AsyncStorage.getItem('dia').then((value) => {
      this.setState({ dia: value });
    });
    await AsyncStorage.getItem('pequeno').then((value) => {
      this.setState({ pequeno: value });
    });
  }

  // Toda vez que um state é atualizado
  async componentDidUpdate(_, prevState) {
    const dia = this.state.dia;
    const pequeno = this.state.pequeno;

    if (prevState !== dia) {
      await AsyncStorage.setItem('dia', dia);
    }
    if (prevState !== pequeno) {
      await AsyncStorage.setItem('pequeno', pequeno);
    }
  }

  rnder() {
    if (!this.state.dia) {
      if (this.state.pequeno) {
        return <Darksm />;
      } else {
        return <Darklg />;
      }
    } else if (this.state.dia) {
      if (this.state.pequeno) {
        return <Lightsm />;
      } else {
        return <Lightlg />;
      }
    }
  }

  onDayChange() {
    return this.setState({
      dia: !this.state.dia,
    });
  }

  onPeqChange() {
    return this.setState({
      pequeno: !this.state.pequeno,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>Frases</Text>
        <View style={styles.viewSwitches}>
          <Text style={styles.title}>Dia</Text>
          <Switch value={this.state.dia} onValueChange={this.onDayChange} />
          <Text style={styles.title}>Pequeno</Text>
          <Switch value={this.state.pequeno} onValueChange={this.onPeqChange} />
        </View>
        <View>{this.rnder()}</View>
      </View>
    );
  }
}
