import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Experiencia() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Experiência:</Text>
        <Text style={styles.text}>Ainda não atuo na área</Text>
        <Text style={styles.text}>Só possuo experiência acadêmica</Text>
        <Text style={styles.text}>Buscando colocação no mercado</Text>

        <Text style={styles.title}>Projetos:</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://hintmovie.netlify.app')}>
          <Text style={styles.link}>Avaliação de Filmes (no ar)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://github.com/JeremiasAlgonz/SalesWebMvc')
          }>
          <Text style={styles.link}>Relatório de vendas (git rep)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://github.com/JeremiasAlgonz/XadrezConsole')
          }>
          <Text style={styles.link}>Xadrez no CMD (git rep)</Text>
        </TouchableOpacity>
        <Text> </Text>
        <Text style={styles.text}>Portfólio web em desenvolvimento</Text>
        <Text style={styles.text}>Alguns outros em arquivos locais</Text>
        <Text style={{ marginBottom: 50 }}></Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 20,
  },
  text: {
    color: '#2b7d64',
    fontSize: 18,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
});
