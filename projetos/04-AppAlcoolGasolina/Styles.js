import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
  },
  title:{
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 30,
  },
  mainImg:{
    width: 130,
    height: 120,
    marginBottom: 30,
    alignSelf: 'center',
  },
  inputBox:{
    alignSelf: 'center',
    width: 300,
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 18,
  },
  button:{
    alignSelf: 'center',
    backgroundColor: '#9DFFB7',
    marginTop: 20,
    width: 300,
    padding: 10, 
  },
  textButton:{
    alignSelf: 'center',
    fontSize: 20,
  },
  result:{
    alignSelf: 'center',
    marginTop: 30,
    paddingLeft: 95,
    paddingRight: 95,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: '#A92525',
    color: '#A92525',        
  },
  gasResult:{
    alignSelf: 'center',
    marginTop: 30,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: '#A92525',
    color: '#A92525', 
  },
  alcoolResult:{
    alignSelf: 'center',
    marginTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: '#4CC11C',
    color: '#4CC11C', 
  },
});

export {styles};