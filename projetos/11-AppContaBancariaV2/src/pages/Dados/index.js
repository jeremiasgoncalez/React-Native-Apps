import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Dados({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {' '}
        Nome: <Text style={styles.text}>{route.params?.nome}</Text>
      </Text>
      <Text style={styles.label}>
        {' '}
        Idade: <Text style={styles.text}>{route.params?.idade}</Text>
      </Text>
      <Text style={styles.label}>
        {' '}
        Genero: <Text style={styles.text}>{route.params?.generos}</Text>
      </Text>
      <Text style={styles.label}>
        {' '}
        Escolaridade: <Text style={styles.text}>{route.params?.escola}</Text>
      </Text>
      <Text style={styles.label}>
        {' '}
        Limite: <Text style={styles.text}>{route.params?.limite}</Text>
      </Text>
      <Text style={styles.label}>
        {' '}
        Brasileiro:{' '}
        <Text style={styles.text}>
          {route.params?.brasileiro ? 'sim' : 'Não'}
        </Text>
      </Text>
    </View>
  );
}
