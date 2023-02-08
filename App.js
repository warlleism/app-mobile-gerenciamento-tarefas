import Home from './src/views/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tarefas from './src/views/tarefas/index';
import Listar from './src/views/listar';
import NovaTarefa from './src/views/novaTarefa/index';
import Provider from './src/context/provider';


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
      <Stack.Screen name="Listar" component={Listar}
        options={{
          cardStyleInterpolator: forFade,
          transitionSpec: {
            open: config,
            close: config,
          },
        }} />
      <Stack.Screen name="Nova" component={NovaTarefa}
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
    <Provider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}

