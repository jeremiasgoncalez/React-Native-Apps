import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffffCC",
  },
  head1:{
    fontSize: 20,
    color: '#640606',
    fontWeight: 'bold'
  },
  head2:{
    fontSize: 16,
    color: '#640606',
    marginBottom: 40,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },

  // INPUTS PARA CONVERSAO
  inputArea: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  inputItem: {
    borderWidth: 1,
    borderColor: '#dddddd',
    backgroundColor: '#ffffffc0',
    width: 100,
    textAlign: 'center'
  },
  button:{
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: '#895dff',
    paddingVertical: 5,
    paddingHorizontal: 70,
  },
  buttonTxt:{
    fontWeight: 'bold',
    color: 'white',
  },
  textResultado:{
    fontSize: 16,
    color: 'green'
  },
  pickerStyle:{
    /*inputIOS: {
        color: 'white',
        paddingHorizontal: 50,
        backgroundColor: 'grey',
        borderRadius: 5,
      },*/
      placeholder: {
        color: 'white',
      },
      inputAndroid: {
        color: 'white',
        paddingHorizontal: 70,
        backgroundColor: '#999999c0',
        borderRadius: 5,
      },
      
  },
});

export { styles };
