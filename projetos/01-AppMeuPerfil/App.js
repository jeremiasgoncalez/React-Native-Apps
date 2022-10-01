import React, { Component } from 'react';
import { TouchableOpacity, Linking } from 'react-native';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './styles';

class App extends Component {
  render() {
    let nome = 'Jeremias Alves Gonçalez';
    let age = '23';
    let img =
      'https://drive.google.com/uc?id=12ZwROTkxeW4jB0IrkWEvRQ3R8xeel9Jt';

    return (
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.container}>
            <Image source={{ uri: img }} style={styles.profilePicture} />
            <>
              {/* DADOS PESSOAIS*/}
              <Text style={styles.textTitle}>Dados pessoais:</Text>
              <Text style={{ color: '#2b7d64', fontSize: 18, marginLeft: 50 }}>
                {nome}
              </Text>
              <Text style={{ color: '#2b7d64', fontSize: 18, marginLeft: 50 }}>
                Resido em Mongaguá-SP
              </Text>
              <Text style={{ color: '#2b7d64', fontSize: 18, marginLeft: 50 }}>
                Canceriano, {age} anos
              </Text>
            </>
            <>
              {/* FORMAçÃO*/}
              <Text style={styles.textTitle}>Formação:</Text>
              <Text style={styles.textSubtitle}>Superior Cursando(FATEC)</Text>
              <Text style={styles.textSubtitle}>
                Técnico em Administração(ETEC)
              </Text>
              <Text style={styles.textSubtitle}>Certificação C# .Net</Text>
            </>
            <>
              {/* Experiência*/}
              <Text style={styles.textTitle}>Experiência:</Text>
              <Text style={styles.textSubtitle}>Ainda não atuo na área</Text>
              <Text style={styles.textSubtitle}>
                Só possuo experiência acadêmica Buscando colocação no mercado
              </Text>
            </>
            <>
              {/* Projetos*/}
              <Text style={styles.textTitle}>Projetos:</Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://hintmovie.netlify.app')
                }>
                <Text style={styles.link}>Avaliação de Filmes (no ar)</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://github.com/JeremiasAlgonz/SalesWebMvc'
                  )
                }>
                <Text style={styles.link}>Relatório de vendas (git rep)</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://github.com/JeremiasAlgonz/XadrezConsole'
                  )
                }>
                <Text style={styles.link}>Xadrez no CMD (git rep)</Text>
              </TouchableOpacity>
              <Text style={styles.textSubtitle}>
                Portfólio web em desenvolvimento
              </Text>
              <Text style={styles.textSubtitle}>
                Alguns outros em arquivos locais
              </Text>
              <Text style={{ marginBottom: 50 }}></Text>
            </>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
