import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    padding: 10,
    marginBottom: 30,
    backgroundColor: 'orange',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  inputName: {
    marginBottom: 20,
    marginLeft: 10,
    paddingBottom: 0,
    padding: 5,
    width: '70%',
    textAlignVertical: 'center',
    backgroundColor: '#EDEDED',
  },
  inputAge: {
    marginBottom: 20,
    marginLeft: 10,
    paddingBottom: 0,
    padding: 5,
    width: '15%',
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: '#EDEDED',
  },
  pickerBox: {
    marginBottom: 20,
    marginLeft: 10,
    paddingBottom: 0,
    padding: 5,
    width: '50%',
    backgroundColor: '#EDEDED',
    textAlignVertical: 'center',
  },
  sliderBox: {
    marginLeft: 10,
    marginRight:30,
    paddingBottom: 0,
    width: '60%',
    textAlignVertical: 'center',
  },
  limitValue: {
    alignSelf: 'center',
  },
  label: {
    marginLeft: 20,
    marginBottom: 20,
    textAlignVertical: 'center',
    fontWeight: 'bold',
    width: '15%',
    padding: 0,
  },
  dataLabel: {
    margin: 20,
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 0,
    color: '#4B86FF',
  },
  limitLabel: {
    marginLeft: 20,
    marginBottom: 20,
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
    width: '15%',
    padding: 0,
  },
  pickerLabel: {
    marginLeft: 20,
    marginBottom: 20,
    textAlignVertical: 'center',
    fontWeight: 'bold',
    width: '30%',
    padding: 0,
  },
  switchLabel: {
    marginLeft: 20,
    marginBottom: 20,
    textAlignVertical: 'bottom',
    fontWeight: 'bold',
    width: '30%',
    padding: 0,
  },
  inputEntries: {
    flexDirection: 'row',
  },
  pickerEntries: {
    flexDirection: 'row',
  },
  switchEntries: {
    flexDirection: 'row',
    marginTop: 30,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  button: {
    marginTop: 40,
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#B9D0FF',
  },
  horizontalLine: {
    flex: 1, 
    height: 1, 
    backgroundColor: 'black',
  },
  resultTitle: {
    width: '40%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export {styles};