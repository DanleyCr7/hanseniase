import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// import { Container } from './styles';
import logo from '../../../assets/git.png'
import exclamacao from '../../../assets/exclamacao.png'
import interrogacao from '../../../assets/interrogacao.png'
import sintomas from '../../../assets/sintomas.png'
import supeita from '../../../assets/supeita.png'
export default class Home extends Component {
  static navigationOptions = {
    headerTitle: 'Inicio'
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={logo}
          aspectRatio={1}
        // resizeMode='stretch'
        />
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => this.props.navigation.navigate('Doenca')}
        >
          <Image
            style={styles.iconLeft}
            source={interrogacao}
            aspectRatio={1}
          // resizeMode='stretch'
          />
          <View style={styles.info}>
            <Text style={styles.title}>Doença</Text>
            <Text style={styles.desc}>o que é Hanseniase?</Text>
          </View>
          <Image
            style={styles.iconRight}
            source={exclamacao}
            aspectRatio={1}
          // resizeMode='stretch'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewButton}>
          <Image
            style={styles.iconLeft}
            source={sintomas}
            aspectRatio={1}
          // resizeMode='stretch'
          />
          <View style={styles.info}>
            <Text style={styles.title}>Sitomas</Text>
            <Text style={styles.desc}>Sinas sobre a doença</Text>
          </View>
          <Image
            style={styles.iconRight}
            source={exclamacao}
            aspectRatio={1}
          // resizeMode='stretch'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewButton}>
          <Image
            style={styles.iconLeft}
            source={supeita}
            aspectRatio={1}
          // resizeMode='stretch'
          />
          <View style={styles.info}>
            <Text style={styles.title}>Suspeita</Text>
            <Text style={styles.desc}>o que deve ser feito?</Text>
          </View>
          <Image
            style={styles.iconRight}
            source={exclamacao}
            aspectRatio={1}
          // resizeMode='stretch'
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Mapa')}>
            <Text style={styles.textButton}>Fazer Analise</Text>
          </TouchableOpacity>
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
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  info: {
    flexDirection: 'column'
  },
  viewButton: {
    // flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#CCC',
    // borderStyle: 'dashed',
    height: 80,
    width: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 18,

  },
  logo: {
    width: 250,
    height: 90,
    marginTop: 20,
    marginBottom: 10
  },
  iconLeft: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  iconRight: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#5f0882',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
})
