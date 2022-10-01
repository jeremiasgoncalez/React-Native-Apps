import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 25,
    color: 'orange',
    marginBottom: 30,
  },
  picture:{
    width:200,
    height: 200,
    marginBottom: 30,
  },
  textBlink:{
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 18,
    color: 'orange',
  },
  result:{
    marginTop: 60,
    borderBottomWidth: 2,
    borderBottomColor: '#AD3F21',
    paddingLeft: 100,
    paddingRight: 100,
    fontSize: 30,
    color: '#AD3F21',
  },
  button:{
    marginTop: 30,
    width: 230,
    padding: 5,
    backgroundColor: '#F1D612',
  },
  textButton:{
    fontSize: 20,
    alignSelf:  'center',
  },
});

export {styles};