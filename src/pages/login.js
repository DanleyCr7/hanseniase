import React, { Component } from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';
import gitLab from '../../assets/git.png';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mail: '',
      senha: '',
      isLoading: false,
      message: '',
      markers: [],
    }
  }
  async componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAcQ8jTZK6PPeQRKaO2txOmvpbRG7AqHSU",
      authDomain: "series-3e08b.firebaseapp.com",
      databaseURL: "https://series-3e08b.firebaseio.com",
      projectId: "series-3e08b",
      storageBucket: "",
      messagingSenderId: "779861796924",
      appId: "1:779861796924:web:da506c2ada262d605a3b39"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const ref = firebase.database().ref('dados')

    await ref.on('child_added', snapshot => {
      const { name, latitude, longitude } = snapshot.val();
      this.state.markers.push({
        name: name,
        coordinate: {
          latitude: latitude,
          longitude: longitude
        }
      });
    });

    this.setState({ markers: [...this.state.markers] })
  }
  // faz a autenticaçao quando clica logar
  tryLogin() {
    this.props.navigation.replace('Inicio', {
      markers: {
        latitude: this.state.markers.latitude,
        longitude: this.state.markers.longitude
      }
    });
    // this.setState({ isLoading: true })
    // const { mail, senha } = this.state
    // firebase.auth()
    //   .signInWithEmailAndPassword(mail,
    //     senha).then(() => {
    //       this.props.navigation.replace('Home');
    //     }).catch(error => {
    //       Alert.alert('Error',
    //         'Usuario e/ou senha incorreto');
    //       this.setState({ isLoading: false })
    //     })
  }

  renderButton() {
    if (this.state.isLoading)
      return <ActivityIndicator />;

    return (
      <TouchableOpacity
        onPress={() => this.tryLogin()}
        style={styles.botao}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      // <Button
      //   title='Criar Conta'
      //   onPress={() => this.tryCreate()}
      // />
    );
  }
  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    });
  }
  render() {
    return (
      <ImageBackground source={{
        uri: 'https://image.shutterstock.com/image-photo/canvas-textured-purple-background-260nw-221301574.jpg'
      }} style={styles.container}>
        <Image
          style={styles.logo}
          source={gitLab}
          aspectRatio={1}
        // resizeMode='stretch'
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={this.state.mail}
          onChangeText={value => this.onChangeHandler('mail',
            value)}
        />

        <TextInput
          style={styles.input}
          placeholder='Senha'
          secureTextEntry={true}
          value={this.state.senha}
          onChangeText={value => this.onChangeHandler('senha',
            value)}
        />
        {this.renderButton()}
        <Text
          onPress={() => { this.props.navigation.navigate('CreateUser'); }
          }
          style={styles.textInsc}
        >Não tem uma conta?</Text>
      </ImageBackground>
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
  input: {
    backgroundColor: '#fff',
    marginTop: 20,
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
    backgroundColor: '#ab1fcf',
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
    width: 270,
    height: 120,
  }
})