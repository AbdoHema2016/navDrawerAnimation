import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.txt}> Settings Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50e339',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});
