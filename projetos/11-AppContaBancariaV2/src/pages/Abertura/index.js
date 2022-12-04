import React, { useState } from 'react';
import { View, Text, Button, TextInput, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from './styles.js';

export default function Abertura() {
  const navigation = useNavigation();

  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [genero, setGenero] = useState();
  const [escolaridade, setEscolaridade] = useState();
  const [limite, setLimite] = useState();
  const [nacionalidade, setNacionalidade] = useState();

  function irSobre() {
    navigation.navigate('Dados informados', {
      nome: nome,
      idade: idade,
      generos: genero,
      escola: escolaridade,
      limite: limite,
      brasileiro: nacionalidade,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Informe alguns dados:</Text>

      <View style={styles.inputEntries}>
        <Text style={styles.label}>Nome: </Text>
        <TextInput
          onChangeText={(valor) => setNome(valor)}
          style={styles.inputName}
        />
      </View>

      <View style={styles.inputEntries}>
        <Text style={styles.label}>Idade: </Text>
        <TextInput
          onChangeText={(valor) => setIdade(valor)}
          style={styles.inputAge}
        />
      </View>

      <View style={styles.inputEntries}>
        <Text style={styles.pickerLabel}>Genero: </Text>
        <Picker
          style={styles.pickerBox}
          selectedValue={genero}
          onValueChange={(itemValor, itemIndex) => setGenero(itemValor)}>
          <Picker.Item label="" value="" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Não Binário" value="Não Binário" />
        </Picker>
      </View>

      <View style={styles.inputEntries}>
        <Text style={styles.pickerLabel}>Ensino: </Text>
        <Picker
          style={styles.pickerBox}
          selectedValue={escolaridade}
          onValueChange={(itemValor, itemIndex) => setEscolaridade(itemValor)}>
          <Picker.Item label="" value="" />
          <Picker.Item label="Ensino Fundamental" value="Ensino Fundamental" />
          <Picker.Item label="Ensino Médio" value="Ensino Médio" />
          <Picker.Item label="Ensino Superior" value="Ensino Superior" />
        </Picker>
      </View>

      <View>
        <Text style={styles.inputEntries}>
          <Slider
            style={styles.limitLabel}
            onValueChange={(valor) => setLimite(valor)}
            size="sm"
            minimumValue={500}
            maximumValue={2500}
            step={500}
            minimumTrackTintColor="red"
            maximumTrackTintColor="green"
          />{' '}
        </Text>

        <Text style={styles.limitValue}>R${limite} </Text>
      </View>

      <View style={styles.switchEntries}>
        <Text style={styles.switchLabel}>Brasileiro? </Text>

        <Switch
          value={nacionalidade}
          onValueChange={(valor) => setNacionalidade(valor)}
        />
      </View>

      <Button title="Criar conta" onPress={irSobre} />
    </View>
  );
}
