import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import CreateAccountHeader from '../CreateAccountHeader/index';
import Output from '../Output/index';
import { styles } from './styles';

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      clientName: '',
      clientAge: 0,
      clientGenre: '',
      clientEducation: '',
      limit: 300,
      clientNationality: '',
      genre: 0,
      genres: [
        { name: 'Selecione' },
        { name: 'Não Binário' },
        { name: 'Masculino' },
        { name: 'Feminino' },
      ],
      educ: 0,
      education: [
        { name: 'Selecione' },
        { name: 'Ensino Fundamental' },
        { name: 'Ensino Médio' },
        { name: 'Ensino Superior Incompleto' },
        { name: 'Ensino Superior Completo' },
      ],
      status: 'false',
      brazilian: true,
    };

    this.onControlChange = this.onControlChange.bind(this);
  }

  onControlChange(value) {
    return this.setState({
      brazilian: !this.state.brazilian,
    });
  }

  render() {
    let genresItem = this.state.genres.map((name, key) => {
      return <Picker.Item label={name.name} key={key} value={key} />;
    });

    let educationItem = this.state.education.map((name, key) => {
      return <Picker.Item key={key} value={key} label={name.name} />;
    });

    return (
      <View>
        <CreateAccountHeader />

        <View style={styles.inputEntries}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.inputName}
            onChangeText={(text) =>
              this.setState({ clientName: text })
            }></TextInput>
        </View>

        <View style={styles.inputEntries}>
          <Text style={styles.label}>Idade: </Text>
          <TextInput
            style={styles.inputAge}
            onChangeText={(text) =>
              this.setState({ clientAge: text })
            }></TextInput>
        </View>

        <View style={styles.pickerEntries}>
          <Text style={styles.label}>Sexo: </Text>
          <Picker
            style={styles.pickerBox}
            selectedValue={this.state.genre}
            onValueChange={(itemValue) =>
              this.setState({
                genre: itemValue,
                clientGenre: genresItem[itemValue],
              })
            }>
            {genresItem}
          </Picker>
        </View>

        <View style={styles.pickerEntries}>
          <Text style={styles.pickerLabel}>Escolaridade:</Text>
          <Picker
            style={styles.pickerBox}
            selectedValue={this.state.educ}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({
                educ: itemValue,
                clientEducation: educationItem[itemValue],
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
              this.setState({ limit: limitSelecionado })
            }
            value={this.state.limit}
            step={500}
            minimumTrackTintColor="green"
            maximumTrackTintColor="red"
            thumbTintColor="black"
          />
        </View>

        <Text style={styles.limitValue}>R$ {this.state.limit.toFixed(2)}</Text>
        <View style={styles.switchEntries}>
          <Text style={styles.switchLabel}>Brasileiro: </Text>
          <Switch
            onValueChange={this.onControlChange}
            value={this.state.brazilian}
          />
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Confirmar</Text>
        </Pressable>

        {/** PROFESSOR, NAO CONSEGUI LIDAR COM OS COMPONENTES PARA FAZER O HIDDEN DA INFORMAÇÃO ABAIXO */}
        {/** vÍ QUE USANDO FUNCTION ERA MAIS FÁCIL, TENTEI E ME ENROLEI, ENTAO O BOTAO ESTÁ NULL E O TEXTO EM TEMPO REAL.  :/ */}

        <Output
          name={this.state.clientName}
          age={this.state.clientAge}
          genrer={this.state.clientGenre}
          education={this.state.clientEducation}
          limit={this.state.limit}
          nacionality={this.state.brazilian}
        />
      </View>
    );
  }
}

export default People;
