import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
    },
    texto:{
      marginTop: 100,
      marginBottom: 40,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      color: '#FE971B'
    },
    entrada:{
      borderWidth: 2,
      margin: 10,
      marginLeft: 50,
      marginRight: 50,
      padding: 5,      
    },
    botao:{
      alignSelf: 'center',
      backgroundColor: '#009EFF',
      width: 200,
      height: 40,
      textAlign: 'center',
      marginTop: 20,
            
    },
    textoBtn:{
      color:'white', 
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 25,
    },
    resultado:{
      alignSelf: 'center',
      marginTop: 80,
      fontSize: 25,
      fontWeight: 'bold',
      color: 'green',

    },
});

  export {styles};
