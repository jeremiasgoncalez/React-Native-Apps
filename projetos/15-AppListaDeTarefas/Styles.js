import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    fontWeight: 'bold',
    fontSize: 20,
    borderBottomWidth: 2,
    paddingHorizontal: 140,
    marginTop: 50,
    alignSelf: 'center',
  },
  addTaskView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 40,
  },
  addTask: {
    alignContent: 'center',
    marginTop: 50,
  },
  removeTask: {
    marginHorizontal: 10,
  },
  inputText: {
    width: 230,
    marginTop: 50,
    marginHorizontal: 8,
    paddingHorizontal: 5,
    borderWidth: 1,
  },
});

export { styles };
