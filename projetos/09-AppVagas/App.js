import React, { Component } from 'react';
import react, {
  View,
  Text,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import { styles } from './Styles';

import Vagas from './src/Vagas';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1,
          titulo: 'Desenvolvedor Backend',
          salario: 7000,
          descricao: 'Irá atuar com desenvolvimento, testes e implantações.',
          contato: 'contato@empresa.com',
        },
        {
          id: 2,
          titulo: 'Engenheiro de Dados',
          salario: 5000,
          descricao: 'Gerenciar, otimizar, supervisionar e monitorar a recuperação, armazenamento e distribuição de dados.',
          contato: 'recrutamento@empresa.com',
        },
        {
          id: 3,
          titulo: 'Desenvolvedor Frontend',
          salario: 3200,
          descricao: 'Responsável por colocar em prática, através de códigos, o design de sites e interfaces.',
          contato: 'solucoes@empresa.com',
        },
        {
          id: 4,
          titulo: 'Analista de Dados',
          salario: 4000,
          descricao: 'Garimpar, catalogar, analisar e interpretar o enorme volume de informações e dados que são obtidos por meios digitais ou analógicos.',
          contato: 'rh@empresa.com',
        },
        {
          id: 5,
          titulo: 'Designer UI/UX',
          salario: 3012,
          descricao: 'Trabalhar toda a jornada do usuário, arquitetura da informação e demais pontos de contato entre plataforma e público, cuidando muito bem dos elementos que afetam a experiência do cliente e que possam influenciar as suas percepções, emoções e comportamentos.',
          contato: 'rh-techx@empresa.com',
        },
        {
          id: 6,
          titulo: 'Analista de Testes',
          salario: 3407,
          descricao: 'Responsável por identificar e definir os testes exigidos, monitorar o processo de teste em detalhes e os resultados em cada ciclo de teste e avaliar a qualidade geral.',
          contato: 'recrutes@empresa.com',
        },
        {
          id: 7,
          titulo: 'Gerente de Projetos',
          salario: 9026,
          descricao: 'Planejar, organizar e executar ações relacionadas aos projetos da organização. Ser responsável por definir o cronograma de operações e entregas do projeto.',
          contato: 'recursoshumanos@empresa.com',
        },
      ],
    };
  }

  render() {
    return (
      <View>

        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#55544F"
          translucent={false}
          networkActivityIndicatorVisible={true}
        />
        
        <ScrollView>
        <View>
        <Text style={styles.header}>Vagas</Text>
        </View>
        <View>
          <FlatList
            data={this.state.feed}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Vagas data={item} />}
          />
        </View>
        </ScrollView>

      </View>
    );
  }
}

export default App;
