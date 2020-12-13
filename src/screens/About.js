import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.txt}> About Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e303fc',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});
