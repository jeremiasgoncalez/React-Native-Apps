import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    margin: 30,
  },
  picture:{
    alignSelf: 'center',
    width:150,
    height: 120,
    marginBottom: 30,
  },
  textInput:{
    alignSelf: 'center',
    borderWidth: 2,
    fontSize: 20,
    padding: 10,
    width: 300,
    marginBottom: 30,
  },
  button:{
    backgroundColor: '#9FFFA8',
    alignSelf: 'center',
    padding: 8,
    width: 300,
  },
  textButton:{
    alignSelf: 'center',
    fontSize: 20,
  },
});

export {styles};