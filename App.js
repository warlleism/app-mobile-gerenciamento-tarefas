import Home from './src/views/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const { width } = Dimensions.get('window')

const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'none',
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default function App() {

  function setBarColor() {

    let horaAtual = new Date();
    let hora = horaAtual.getHours();
    let str = hora.toString()

    if (str.length <= 1) {
      str = 0 + str
    }

    if (str >= 6 && str <= 17) {
      return { cor: '#014867' }
    } else {
      return { cor: '#1B1987' }
    }

  }

  return (
    <NavigationContainer>
      <MyStack />
      <View style={{
        bottom: 0,
        height: 60,
        width: width,
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        justifyContent: 'space-around',
        backgroundColor: setBarColor().cor,
      }}>
        <TouchableOpacity>
          <Icon name="home" size={30} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="calendar" size={30} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="pluscircleo" size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
}

