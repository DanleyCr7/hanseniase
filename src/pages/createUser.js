import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Alert,
  ImageBackground,
  TouchableOpacity
} from 'react-native';


import firebase from 'firebase';
// import console from ('console');
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mail: '',
      senha: '',
      isLoading: false,
      message: '',
    }
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    });
  }

  tryCreate() {
    this.setState({ isLoading: true })
    const { mail, senha } = this.state

    firebase.auth()
      .createUserWithEmailAndPassword(mail,
        senha)
      .then(user => {
        Alert.alert(
          'Sucesso',
          'Usuario cadastrado com sucesso',
          /* Teste */
        );
        // this.setState({ message: 'Sucesso' })
        this.setState({ isLoading: false })
        this.props.navigation.navigate('Login')
        // console.log('usuario autenticado')
      })
      .catch(error => {
        Alert.alert(
          'Error',
          'Esse usuario já existe' ,
          /* Text */
        );
        this.setState({ isLoading: false })

      })
  }

  renderButton() {
    if (this.state.isLoading)
      return <ActivityIndicator />;

    return (
      <TouchableOpacity
        onPress={() => this.tryCreate()}
        style={styles.botao}>
        <Text style={styles.textButton}>Criar Usuario</Text>
      </TouchableOpacity>
      // <Button
      //   title='Criar Conta'
      //   onPress={() => this.tryCreate()}
      // />
    );
  }

  render() {
    return (
      <ImageBackground source={{
        uri: 'https://img.freepik.com/free-vector/gradient-geometric-shape-background_78532-374.jpg?size=626&ext=jpg'
      }} style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={this.state.mail}
          onChangeText={value => this.onChangeHandler('mail',
            value)}
        />

        <TextInput
          style={styles.input1}
          placeholder='Senha'
          secureTextEntry={true}
          value={this.state.senha}
          onChangeText={value => this.onChangeHandler('senha',
            value)}
        />
        {this.renderButton()}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: null,
    width: null,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 90,
    borderRadius: 12,
    height: 50,
    width: 280,
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
  },
  input1: {
    backgroundColor: '#fff',
    marginTop: 35,
    borderRadius: 12,
    height: 50,
    width: 280,
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
  },
  botao: {
    width: 200,
    height: 40,
    backgroundColor: '#2f66cc',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInsc: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
  logo: {
    width: 130,
    height: 130,
  }
})