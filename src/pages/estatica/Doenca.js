import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default class estatica extends Component {
  static navigationOptions = {
    headerTitle: 'O que é Hanseníase?'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.viewText}>A hanseníase, conhecida antigamente como Lepra, é uma doença crônica, transmissível, de notificação compulsória e investigação obrigatória em todo território nacional. Possui como agente etiológico o Micobacterium leprae, bacilo que tem a capacidade de infectar grande número de indivíduos, e atinge principalmente a pele e os nervos periféricos,

Com capacidade de ocasionar lesões neurais, conferindo à doença um alto poder incapacitante, principal responsável pelo estigma e discriminação às pessoas acometidas pela doença.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 800,
    width: null,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  viewText: {
    marginTop: 50,
    // flex: 1,
    borderRadius: 4,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCC',
    // borderStyle: 'dashed',
    height: 400,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18
  },

})