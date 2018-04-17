import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

const styles = {
  box: {},
  text: {},
}

export default class CrossPlatform extends Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Boom, from react-native-web!</Text>
      </View>
    );
  }
}
