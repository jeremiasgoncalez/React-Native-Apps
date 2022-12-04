/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Detalhes({voltar, filme}) {

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
          <Text style={{color: '#FFF', fontSize: 16}}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.description}>{filme.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer:{
    width: '100%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  btnVoltar:{
    backgroundColor: '#E52246',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  title:{
    fontSize: 25,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  sinopse:{
    fontSize: 18,
    marginBottom: 5,
    color: '#FFF',
    marginLeft: 10,
  },
  description:{
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    color: '#FFF',
    textAlign: 'justify',
  },
});