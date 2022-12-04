import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomWidth: 2,
    paddingHorizontal: 100,
    marginTop: 50,
    alignSelf: 'center',
  },
  addProdutoView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 40,
  },
  addProduto: {
    alignContent: 'center',
    marginTop: 50,
  },
  removeProduto: {
    marginHorizontal: 10,
  },
  inputText: {
    width: 230,
    marginTop: 50,
    marginHorizontal: 8,
    paddingHorizontal: 5,
    borderWidth: 1,
  },
  inputQtd: {
    width: 50,
    marginTop: 50,
    marginHorizontal: 8,
    paddingHorizontal: 5,
    borderWidth: 1,
  },
});

export { styles };
