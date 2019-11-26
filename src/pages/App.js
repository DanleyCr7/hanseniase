import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import firebase from 'firebase'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
console.disableYellowBox = true;

// var id = 0;
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      markers: [],
      // coordinate:{}
    }
    this.onMapPress = this.onMapPress.bind(this);
  }
  async componentDidMount() {
    // var firebaseConfig = {
    //   apiKey: "AIzaSyAcQ8jTZK6PPeQRKaO2txOmvpbRG7AqHSU",
    //   authDomain: "series-3e08b.firebaseapp.com",
    //   databaseURL: "https://series-3e08b.firebaseio.com",
    //   projectId: "series-3e08b",
    //   storageBucket: "",
    //   messagingSenderId: "779861796924",
    //   appId: "1:779861796924:web:da506c2ada262d605a3b39"
    // };

    // // Initialize Firebase
    // if (!firebase.apps.length) {
    //   firebase.initializeApp(firebaseConfig);
    // }
    // firebase.database().ref('/dados').on('value', data => {
    //   console.log(data.val90)
    //   // this.state.markers = data.;
    // })
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
      this.setState({ markers: [...this.state.markers] })
      // console.log(this.state.markers)
      // this.state.markers = snapshot;
    })

  }
  async onMapPress(e) {
    const { latitude, longitude } = e.nativeEvent.coordinate
    const coordinate = e.nativeEvent.coordinate
    Alert.alert('Inscrição',
      `Local que voce marcou está mesmo correto?`,
      [{
        text: 'Não',
        onPress: async () => {

        },
      }, {
        text: 'Sim',
        onPress: async () => {
          await this.setState({
            markers: [
              ...this.state.markers,
              {
                coordinate: coordinate,
                name: `foo${id++}`,
              },
            ],
          });
          const dados = {
            name: 'Danrley',
            latitude: latitude,
            longitude: longitude,
          }
          const db = firebase.database()

          await db.ref(`/dados`).push(dados)
          // await this.props.navigation.navigate('Formulario', {
          //   paciente: {
          //     latitude: latitude,
          //     longitude: longitude
          //   }
          // });

        }
      }],
      { cancelable: false }
    )
    // console.log(this.state.markers)
  }

  ChamaForm(e) {

  }

  render() {
    const { navigation } = this.props;
    const { markers } = navigation.state.params;
    this.state.markers.push({
      name: markers.name,
      coordinate: {
        latitude: markers.coordinate.latitude,
        longitude: markers.coordinate.longitude
      }
    });
    // console.log(this.state.markers)
    // const { nome } = markers
    // this.state.markers = markers
    // this.setState({markers})
    // this.state.markers.push({
    //   name: dados.name,
    //   coordinate: {
    //     latitude: dados.latitude,
    //     longitude: dados.longitude
    //   }
    // })
    // console.log(markers.name)
    return (
      <View style={styles.container} >

        <MapView style={styles.map}
          initialRegion={{
            latitude: -2.914164,
            longitude: -41.760679,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
          }}
          // provider={this.props.provider}
          onLongPress={this.onMapPress}
        >

          {this.state.markers.map(marker => (

            <Marker
              key={marker.id}
              coordinate={
                // marker.coordinate
                {
                  latitude: marker.coordinate.latitude,
                  longitude: marker.coordinate.longitude
                }
              }
              title={marker.name}
              description={"Trabalho sobre a pesquisa de hanseniase"}

            />
          ))}

        </MapView>
        <View style={styles.buttonContainer}>
        </View>
      </View>
    )
  }
}
// App.propTypes = {
//   provider: MapView.ProviderPropType,
// };



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
    justifyContent: 'space-between'
  },
});
