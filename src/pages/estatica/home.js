import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
// import { Container } from './styles';
import logo from '../../../assets/git.png'
import exclamacao from '../../../assets/exclamacao.png'
import interrogacao from '../../../assets/interrogacao.png'
import sintomas from '../../../assets/sintomas.png'
import suspeita from '../../../assets/supeita.png'
import camera from '../../../assets/camera.png'
import pontos from '../../../assets/3pontos.png'
export default class Home extends Component {
  state = {
    image: null,
    preview: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  }

  handleSelectImage = () => {
    ImagePicker.showImagePicker({
      title: 'Selecione a imagem',
    }, upload => {
      if (upload.error) {
        console.log('Error');
      }
      else if (upload.didCancel) {
        console.log('Cancelado');
      }
      else {
        const preview = {
          uri: `data:image/jpeg;base64,${upload.data}`,
        }
        let prefix;
        let ext;

        if (upload.fileName) {
          [prefix, ext] = upload.fileName.split('.')
          ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext
        } else {
          prefix = new Date().getTime();
          ext = 'jpg';
        }

        const image = {
          uri: upload.uri,
          type: upload.type,
          name: `${prefix}.${ext}`
        };

        this.setState({ preview, image })
      }
    })
  }

  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity style={{ height: 20, width: 20, marginLeft: 10 }} onPress={() => navigation.navigate('Mapa')} >
        <Image source={pontos} style={styles.iconPonto} />
      </TouchableOpacity>
    ),
  });
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.perfil}>
            <Text style={styles.textPefil}>Olá, Danrley</Text>
          </View>
          <View>
            <ScrollView style={styles.scronHor} horizontal={true}>
              <View style={styles.borda}>
                {/* View lado a lado */}
                <View style={styles.row}>
                  <Image
                    style={styles.iconLeft}
                    source={interrogacao}
                    aspectRatio={1}
                  // resizeMode='stretch'
                  />
                  <Text style={styles.title}>Hanseniase</Text>
                </View>
                <Text style={styles.textoMini}>Doença infecciosa crônica e curável que causa, sobretudo, lesões de pele e danos aos nervos</Text>
                {/* View lado a lado */}
                <TouchableOpacity style={styles.buttonScrol} onPress={() => this.props.navigation.navigate('Doenca')} >
                  <Text style={styles.textButton}>Quero ver mais</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.borda}>
                {/* View lado a lado */}
                <View style={styles.row}>
                  <Image
                    style={styles.iconLeft}
                    source={sintomas}
                    aspectRatio={1}
                  // resizeMode='stretch'
                  />
                  <Text style={styles.title}>Sintomas</Text>
                </View>
                <Text style={styles.textoMini}>Doença infecciosa crônica e curável que causa, sobretudo, lesões de pele e danos aos nervos</Text>
                {/* View lado a lado */}
                <TouchableOpacity style={styles.buttonScrol}>
                  <Text style={styles.textButton}>Quero ver mais</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.borda}>
                {/* View lado a lado */}
                <View style={styles.row}>
                  <Image
                    style={styles.iconLeft}
                    source={suspeita}
                    aspectRatio={1}
                  // resizeMode='stretch'
                  />
                  <Text style={styles.title}>Suspeita</Text>
                </View>
                <Text style={styles.textoMini}>Doença infecciosa crônica e curável que causa, sobretudo, lesões de pele e danos aos nervos</Text>
                {/* View lado a lado */}
                <TouchableOpacity style={styles.buttonScrol}>
                  <Text style={styles.textButton}>Quero ver mais</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View style={styles.HanTipos}>
            <Text style={styles.TitleTipo}>Tipos de Hanseníase</Text>
            <Text style={styles.textoTipo}>
              Os sinais de hanseníase são diversos e
              apresentam-se na pele e nos nervos periféricos.
              Então, podemos suspeitar de hanseníase quando a
              pessoa apresentar áreas da pele com manchas
              esbranquiçadas, acastanhadas ou avermelhadas,
              com alteração na sensibilidade
            </Text>
            <TouchableOpacity style={styles.BotaoTipo} onPress={this.handleSelectImage}>
              <Text style={styles.textTipo}>Mais detalhes</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewCam}>
            <TouchableOpacity style={styles.selectButton} onPress={this.handleSelectImage}>
              <Image
                style={styles.iconCamera}
                source={camera}
                aspectRatio={1}
              // resizeMode='stretch'
              />
            </TouchableOpacity>
            {this.state.preview && <Image style={styles.preview} source={this.state.preview} />}
            <TouchableOpacity style={styles.butaoAnalise} onPress={this.handleSelectImage}>
              <Text style={styles.butaoTextoAnalise}>Fazer analise</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f2f7',
    // justifyContent: 'center'
  },
  perfil: {
    // flex: 1,
    width: '100%',
    height: 100,
    backgroundColor: '#490dbf'
  },
  textPefil: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 10,
    color: '#fff',
  },
  viewCam: {
    flex: 1,
    alignItems: 'center',
    // width: '100%',
    // backgroundColor: 'black'
  },
  scronHor: {
    height: 170,
    // marginTop: 80,
    // width: 20,
    backgroundColor: '#490dbf'
  },
  TitleTipo: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  textoTipo: {
    // flex: 3,
    // maxHeight: ,
    textAlign: 'justify',
    marginTop: 5,
    marginLeft: 30,
    marginRight: 20,
    fontSize: 15,
    color: '#fff'
    // marginLeft: 50,
  },
  HanTipos: {
    flex: 1,
    height: 250,
    width: 300,
    marginLeft: 30,
    backgroundColor: '#490dbf',
    marginTop: 20,
    borderRadius: 12,
    alignItems: 'center'
  },
  borda: {
    borderRadius: 8,
    // borderWidth: 2,
    // borderColor: '#CCC',
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    margin: 10,
    backgroundColor: '#fff'
  },
  textBoder: {
    color: '#CCC'
  },
  textoMini: {
    textAlign: 'center',
    marginBottom: 17,
    fontSize: 12,
  },
  iconLeft: {
    width: 20,
    height: 25,
    marginRight: 5,
    marginLeft: -5,
    // marginTop: -100
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    // marginRight: 30,
  },
  buttonScrol: {
    backgroundColor: '#310975',
    borderRadius: 8,
    height: 23,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  textButton: {
    color: '#fff',
    fontSize: 12,
  },
  row: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    // alignItems: 'center'
  },
  selectButton: {
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#490dbf',
    height: 42,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,

  },

  butaoTextoAnalise: {
    fontSize: 16,
    color: '#fff',
  },
  iconCamera: {
    width: 30,
    height: 30
  },
  iconPonto: {
    width: 25,
    height: 20
  },
  butaoAnalise: {
    width: 300,
    height: 40,
    backgroundColor: '#490dbf',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  BotaoTipo: {
    width: 150,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 23,
  },
  textTipo: {
    fontSize: 14,
    color: 'black',
  },
  preview: {
    width: 100,
    height: 100,
    // marginTop: 5,
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 4,
  },
})
