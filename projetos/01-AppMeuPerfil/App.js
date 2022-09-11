import React, { Component } from 'react';
import { TouchableOpacity, Linking } from "react-native";
import { View, Text, Image, SafeAreaView, ScrollView} from 'react-native';

 
class App extends Component{
  render(){
 
    let nome = 'Jeremias Alves Gonçalez';
    let age = '23';
    let img = 'https://pps.whatsapp.net/v/t61.24694-24/297518891_1170926040153312_8533774299329591818_n.jpg?ccb=11-4&oh=01_AVx5MfUpROIGClbB11uut7TWzbwtS1L1ZLy8-JXVjqf5ig&oe=6326C42D';
 
    return(
      <SafeAreaView>
      <ScrollView>
        <View style={{flex:1, backgroundColor:' #bbb9ba ', flexDirection:'collunm'}}>
          <Image
            source={{ uri: img }}
            style={{ width: 200, height: 230, marginTop:50, alignSelf:'center'}}
          />
          <>{/* DADOS PESSOAIS*/}
            <Text style={{ color:'#2b7d64', fontSize: 22, fontWeight:'bold', marginLeft: 30, marginTop:20}}>
              Dados pessoais:
              </Text>
            <Text style={{ color:'#2b7d64', fontSize: 18, marginLeft: 50}}>
              {nome}
              </Text>
            <Text style={{ color:'#2b7d64', fontSize: 18, marginLeft: 50}}>
              Resido em Mongaguá-SP
              </Text>
            <Text style={{ color:'#2b7d64', fontSize: 18, marginLeft: 50}}>
             Canceriano, {age} anos
              </Text>
          </>
          <>{/* FORMAçÃO*/}
            <Text style={{ color:'#2b7d64', fontSize: 22, fontWeight:'bold', marginLeft: 30, marginTop:20}}>
                Formação:
                </Text>
              <Text style={{ color:'#2b7d64', fontSize: 18, marginLeft: 50}}>
                Superior Cursando(FATEC)
                </Text>
              <Text style={{ color:'#2b7d64', fontSize: 18, marginLeft: 50}}>
                Técnico em Administração(ETEC)
                </Text>
              <Text style={{ color:'#2b7d64', fontSize: 18, marginLeft: 50}}>
                Certificação C# .Net
                </Text>         
          </>
          <>{/* Experiência*/}
            <Text style={{ color:'#2b7d64', fontSize: 22, fontWeight:'bold', marginLeft: 30, marginTop:20}}>
                Experiência:
                </Text>
              <Text style={{ color:'#2b7d64', fontSize: 18, marginLeft: 50}}>
                Ainda não atuo na área
                </Text>
              <Text style={{ color:'#2b7d64', fontSize: 18, marginLeft: 50}}>
                Só possuo experiência acadêmica
                Buscando colocação no mercado
                </Text>
          </>
          <>{/* Projetos*/}
            <Text style={{ color:'#2b7d64', fontSize: 22, fontWeight:'bold', marginLeft: 30, marginTop:20}}>
                Projetos:
                </Text>
                <TouchableOpacity onPress={() => Linking.openURL('https://hintmovie.netlify.app')}>
                  <Text style={{ color:'blue',textDecorationLine:'underline', fontSize: 18, marginLeft: 50}}>
                      Avaliação de Filmes (no ar)
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/JeremiasAlgonz/SalesWebMvc')}>
                  <Text style={{ color:'blue',textDecorationLine:'underline', fontSize: 18, marginLeft: 50}}>
                      Relatório de vendas (git rep)
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/JeremiasAlgonz/XadrezConsole')}>
                  <Text style={{ color:'blue',textDecorationLine:'underline', fontSize: 18, marginLeft: 50}}>
                      Xadrez no CMD (git rep)
                    </Text>
                </TouchableOpacity>
                <Text style={{ color:'#2b7d64', fontSize: 18, marginLeft: 50}}>
                    Portfólio web em desenvolvimento
                  </Text>
                  <Text style={{ color:'#2b7d64', fontSize: 18, marginLeft: 50}}>
                    Alguns outros em arquivos locais
                  </Text>
                <Text style={{ color:'#2b7d64', fontSize: 18, marginBottom: 50}}>
                    


                  </Text>
          </>
        </View>
        </ScrollView>
        </SafeAreaView>
)
}

}

export default App;
