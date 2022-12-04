import React, { Component } from 'react';
import react, { Text, View, TextInput, Switch, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import Resume from '../Resume/Index';
import { styles } from './Styles';

export default class NovaConta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      nome: '',
      idade: 0,
      genero: '',
      escolaridade: '',
      limite: 300,
      nacionalidade: '',

      showNome: '',
      showIdade: '',
      showGenero: '',
      showEscolaridade: '',
      showLimite: '',
      showNac: '',

      gen: 0,
      generos: [
        { name: 'Não Binário' },
        { name: 'Masculino' },
        { name: 'Feminino' },
      ],
      esc: 0,
      escolaridades: [
        { name: 'Ensino Fundamental' },
        { name: 'Ensino Médio' },
        { name: 'Ensino Superior Incompleto' },
        { name: 'Ensino Superior Completo' },
      ],
      status: 'false',
      brasileiro: '',
    };

    this.onControlChange = this.onControlChange.bind(this);
    this.createClient = this.createClient.bind(this);
    
  }

  onControlChange() {
    return this.setState({
      brasileiro: !this.state.brasileiro,
    });
    
  }

  createClient(){
  this.setState({
    showNome: this.state.nome, 
    showIdade: this.state.idade, 
    showGenero: this.state.genero, 
    showEscolaridade: this.state.escolaridade, 
    showLimite: this.state.limite.toFixed(2),
    showNac: this.state.brasileiro,

  })
}

  render() {
    let genresItem = this.state.generos.map((name, key) => {
      return <Picker.Item label={name.name} key={key} value={key} />;
    });

    let educationItem = this.state.escolaridades.map((name, key) => {
      return <Picker.Item key={key} value={key} label={name.name} />;
    });

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.head}>ABERTURA DE CONTA</Text>
        </View>

        <View style={styles.inputEntries}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.inputName}
            onChangeText={(text) =>
              this.setState({ nome: text })
            }></TextInput>
        </View>

        <View style={styles.inputEntries}>
          <Text style={styles.label}>Idade: </Text>
          <TextInput
            style={styles.inputAge}
            onChangeText={(text) =>
              this.setState({ idade: text })
            }></TextInput>
        </View>

        <View style={styles.pickerEntries}>
          <Text style={styles.label}>Sexo: </Text>
          <Picker
            style={styles.pickerBox}
            selectedValue={this.state.gen}
            onValueChange={(itemValue) => 
            this.setState({
                gen: itemValue,
                genero: genresItem[itemValue],
            })
            }>
            {genresItem}
          </Picker>
        </View>

        <View style={styles.pickerEntries}>
          <Text style={styles.pickerLabel}>Escolaridade:</Text>
          <Picker
            style={styles.pickerBox}
            selectedValue={this.state.esc}
            onValueChange={(itemValue) =>
              this.setState({
                esc: itemValue,
                escolaridade: educationItem[itemValue],
                })
            }>
            {educationItem}
          </Picker>
        </View>

        <View style={styles.pickerEntries}>
          <Text style={styles.limitLabel}>Limite:</Text>
          <Slider
            style={styles.sliderBox}
            minimumValue={300}
            maximumValue={2500}
            onValueChange={(limitSelecionado) =>
              this.setState({ limite: limitSelecionado })
            }
            value={this.state.limite}
            step={500}
            minimumTrackTintColor="green"
            maximumTrackTintColor="red"
            thumbTintColor="black"
          />
        </View>

        <Text style={styles.limitValue}>R$ {this.state.limite.toFixed(2)}</Text>

        <View style={styles.switchEntries}>
          <Text style={styles.switchLabel}>Brasileiro: </Text>
          <Switch
            onValueChange={this.onControlChange}
            value={this.state.brasileiro}
          />
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.textButton} onPress={this.createClient}>Confirmar</Text>
        </Pressable>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 50,
            padding: 20,
          }}>
          <View style={styles.horizontalLine}></View>
          <Text style={styles.resultTitle}>Dados Informados</Text>
          <View style={styles.horizontalLine}></View>
        </View>
        
        <Resume nome={this.state.showNome}
                idade={this.state.showIdade}
                genero={this.state.showGenero}
                escolaridade={this.state.showEscolaridade}
                limite={this.state.showLimite}
                nacionalidade={this.state.showNac}
        />

      </View>
    );
  }
}
