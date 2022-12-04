import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Lightlg extends Component {
  rnder() {
    return (
      <Text style={styles.majorText}>
        "A vingança nunca é plena, mata a alma e envenena." (Seu Madruga)
      </Text>
    );
  }

  render() {
    let small = this.props.pequeno;
    this.rnder(small);

    return <View style={styles.container}>{this.rnder()}</View>;
  }
}
export default Lightlg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  majorText: {
    borderWidth: 1,
    padding: 10,
    height: 450,
    width: 320,
    margin: 10,
    fontSize: 28,
  },
});
