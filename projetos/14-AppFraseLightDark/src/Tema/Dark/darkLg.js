import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Darklg extends Component {
  rnder() {
    return (
      <Text style={styles.majorText}>
        "A vingança nunca é plena, mata a alma e envenena." (Seu Madruga)
      </Text>
    );
  }

  render() {
    return <View style={styles.container}>{this.rnder()}</View>;
  }
}
export default Darklg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  majorText: {
    color: 'white',
    padding: 10,
    height: 450,
    width: 320,
    margin: 10,
    fontSize: 28,
    backgroundColor: '#293040',
  },
});
