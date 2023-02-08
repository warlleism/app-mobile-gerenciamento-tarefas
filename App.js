import Home from './src/views/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Tarefas from './src/views/tarefas/index';

const { width } = Dimensions.get('window')

const Stack = createStackNavigator()

function MyStack() {

  const config = {
    animation: 'stiffness',
    config: {
      stiffness: 2000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <Stack.Navigator

      screenOptions={{
        headerMode: 'none',
      }}>
      <Stack.Screen name="Home" component={Home}
        options={{
          cardStyleInterpolator: forFade,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Stack.Screen name="Tarefas" component={Tarefas}
        options={{
          cardStyleInterpolator: forFade,
          transitionSpec: {
            open: config,
            close: config,
          },
        }} />
    </Stack.Navigator>
  )
}



export default function App() {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

