import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.txt}> Home Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03dffc',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});
