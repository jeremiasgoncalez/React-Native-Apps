import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Lightsm extends Component {
  rnder() {
    return (
      <Text style={styles.minorText}>
        "A vingança nunca é plena, mata a alma e envenena." (Seu Madruga)
      </Text>
    );
  }

  render() {
    return <View style={styles.container}>{this.rnder()}</View>;
  }
}
export default Lightsm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  minorText: {
    borderWidth: 1,
    padding: 10,
    height: 450,
    width: 320,
    margin: 10,
    fontSize: 15,
  },
});
