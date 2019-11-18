import { createStackNavigator } from 'react-navigation';

import Login from './pages/login';
import CreateUser from './pages/createUser';
import Mapa from './pages/App';
import Form from './pages/form';
import Resultado from './pages/resultado';
import Inicio from './pages/estatica/home';
import Doenca from './pages/estatica/Doenca';
export default createStackNavigator({

  'Login': {
    screen: Login,
    navigationOptions: {
      title: 'Bem Vindo',
    }
  },
  'Inicio': {
    screen: Inicio,
    navigationOptions: {
      title: 'Bem Vindo',
    }
  },
  'Mapa': {
    screen: Mapa,
    navigationOptions: {
      title: 'Bem Vindo',
    }
  },
  'Doenca': {
    screen: Doenca,
    navigationOptions: {
      title: 'Localização',
    }
  },

  'CreateUser': {
    screen: CreateUser,
    navigationOptions: {
      title: 'Criar Usuario',
    }
  },
  'Formulario': {
    screen: Form,
    navigationOptions: {
      title: 'Formulario',
    }
  },

  'Resultado': {
    screen: Resultado,
    navigationOptions: {
      title: 'Resultado',
    }
  },

},
  {
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#5f0882'
      },
      headerTintColor: '#fff'
    },
  });