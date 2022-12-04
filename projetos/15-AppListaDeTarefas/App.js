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

const db = SQLite.openDatabase('tarefas.db');

const App = () => {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);
  let [inputTaskId, setInputTaskId] = useState('');

  const createTables = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log('Tabela criada com sucesso!');
        },
        (error) => {
          console.log('error on creating table ' + error.message);
        }
      );
    });
  };

  const incluirTarefa = () => {
    if (!tarefa) {
      alert('Informe uma tarefa');
      return false;
    }
    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa('');
        },
        (error) => {
          console.log('Erro ao inserir uma Tarefa ' + error.message);
        }
      );
    });
  };

  const removerTarefa = async (inputTaskId) => {
    try {
      db.transaction((txn) => {
        txn.executeSql(
          `DELETE FROM  tarefas WHERE id=?`,
          [inputTaskId],
          (sqlTxn, res) => {
            console.log(`${tarefa} Tarefa removida com sucesso!`);
            getTarefas();
          },
          (error) => {
            console.log('Erro ao remover uma Tarefa ' + error.message);
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getTarefas = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id ASC`,
        [],
        (sqlTxn, res) => {
          console.log('Tarefas lidas com sucesso!');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }

            setTarefas(results);
          }
        },
        (error) => {
          console.log('Erro ao obter Tarefas ' + error.message);
        }
      );
    });
  };

  const renderTarefa = ({ item }) => {
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
        <TouchableOpacity
          style={styles.removeTask}
          onPress={((inputTaskId) => setInputTaskId(item.id), removerTarefa)}>
          <FontAwesome name="trash" size={20} color="#222" />
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getTarefas();
  }, []);

  return (
    <View>
      <StatusBar backgroundColor="#fff222" />

      <Text style={styles.head}>Tarefas</Text>

      <View style={styles.addTaskView}>
        <TextInput
          style={styles.inputText}
          placeholder="Informe uma tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />

        <TouchableOpacity style={styles.addTask} onPress={incluirTarefa}>
          <FontAwesome name="plus-circle" size={35} color="#11118c" />
        </TouchableOpacity>
      </View>
      <FlatList data={tarefas} renderItem={renderTarefa} key={(t) => t.id} />
    
    </View>
  );
};

export default App;
