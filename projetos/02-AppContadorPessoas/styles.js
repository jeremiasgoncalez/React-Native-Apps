import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
    },
    input:{
      height: 45,
      borderWidth: 1,
      borderColor: '#222',
      margin: 10,
      fontSize: 20,
      padding: 10,
    },
    texto:{
      marginTop: 100,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      color: '#FE971B'
    },
 botaoMais:{
    alignSelf: 'center',
    width: 280,
    height: 50,
    margin: 20,
    backgroundColor: '#7DE49D'
  },
  botaoMenos:{
    alignSelf: 'center',
    width: 280,
    height: 50,
    margin: 20,
    backgroundColor: '#F73F3F'
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
    fontSize: 40,
    color: '#FFFFFF',
  },
  qtdDisplay:{
    alignSelf: 'center',
    textAlignVertical: 'center',
    marginTop: 40,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'bold',
    fontSize: 75,
    color: '#9E2811',
    borderWidth: 2,
    borderColor: "000000",
  }
});

  export {styles};
