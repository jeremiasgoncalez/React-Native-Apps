import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  head: {
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomWidth: 2,
    paddingHorizontal: 120,
  },
  viewSwitches: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  input: {
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center',
  },
});

export { styles };
