import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { styles } from './Styles.js';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('produtos.db');

const App = () => {
  const [qtd, setQtd] = useState('');
  const [produto, setProduto] = useState('');
  const [produtos, setProdutos] = useState([]);

  const createTables = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, qtd NUMERIC, nome VARCHAR(20))`,
        [],
        (sqlTx, res) => {
          console.log('Tabela criada com sucesso!');
        },
        (error) => {
          console.log('error on creating table ' + error.message);
        }
      );
    });
  };

  const incluirProduto = () => {
    if (!produto) {
      alert('Informe um produto e quantidade!');
      return false;
    }
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO produtos (qtd, nome) VALUES (?, ?)`,
        [qtd, produto],
        (sqlTx, res) => {
          console.log(`${produto} Produto adicionado com sucesso!`);
          getProdutos();
          setProduto('');
        },
        (error) => {
          console.log('Erro ao inserir uma Produto ' + error.message);
        }
      );
    });
  };

  const removerProduto = async (value) => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          `DELETE * FROM produtos WHERE id=${value}`,
          (sqlTx, res) => {
            console.log(`${produto} Produto removido com sucesso!`);
          },
          (error) => {
            console.log('Erro ao remover uma Produto ' + error.message);
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getProdutos = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT id, qtd, nome FROM produtos ORDER BY id ASC`,
        [],
        (sqlTx, res) => {
          console.log('Produtos lidos com sucesso!');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, qtd: item.qnt, nome: item.nome });
            }

            setProdutos(results);
          }
        },
        (error) => {
          console.log('Erro ao obter Produtos ' + error.message);
        }
      );
    });
  };

  const renderProduto = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: '#ddd',
        }}>
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text>{item.nome}</Text>
        <Text>{item.qtd}</Text>
        <TouchableOpacity
          style={styles.removeProduto}
          onPress={removerProduto(item.id)}>
          <FontAwesome name="trash" size={20} color="#222" />
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getProdutos();
  }, []);

  return (
    <View>
      <StatusBar backgroundColor="green" />

      <Text style={styles.head}>Lista de Compras</Text>

      <View style={styles.addProdutoView}>
        <TextInput
          style={styles.inputQtd}
          placeholder="Qtd."
          value={qtd}
          onChangeText={setQtd}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Inserir Produto"
          value={produto}
          onChangeText={setProduto}
        />

        <TouchableOpacity style={styles.addProduto} onPress={incluirProduto}>
          <FontAwesome name="plus-circle" size={35} color="green" />
        </TouchableOpacity>
      </View>
      <FlatList data={produtos} renderItem={renderProduto} key={(t) => t.id} />
    </View>
  );
};

export default App;
