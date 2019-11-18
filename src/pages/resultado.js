import React, { Component } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default class pages extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewText}>
          <Text style={styles.text}>Paciente</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.text}>longitude</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.text}>latitude</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 800,
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  viewText: {
    // flex: 1,
    borderRadius: 4,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCC',
    borderStyle: 'dashed',
    height: 60,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18
  },

})