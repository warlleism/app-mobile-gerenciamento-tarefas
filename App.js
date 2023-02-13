import Home from './src/views/home';
import { NavigationContainer } from '@react-navigation/native';
import Tarefas from './src/views/tarefas/index';
import NovaTarefa from './src/views/novaTarefa/index';
import Provider from './src/context/provider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator()


export default function App() {

  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: {
              position: 'absolute',
              bottom: 0,
              backgroundColor: "#013a52",
              borderTopColor: "#013a52",
            },
            tabBarButton: [
              "Listar",
              "Listar"
            ].includes(route.name)
              ? () => {
                return null;
              }
              : undefined,
          })}

        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              unmountOnBlur: true,
              headerShown: false,
              tabBarLabel: '',
              tabBarIcon: ({ focused }) => {
                return <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon name="home" size={30} color={focused ? '#007878f2' : '#ffff'} />
                </View>
              }
            }}
          />

          <Tab.Screen name="Tarefas" component={Tarefas}
            options={{
              unmountOnBlur: true,
              headerShown: false,
              tabBarLabel: '',
              tabBarIcon: ({ focused }) => {
                return <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon name="calendar" size={30} color={focused ? '#007878f2' : '#ffff'} />
                </View>
              }
            }} />

          <Tab.Screen name="Nova" component={NovaTarefa}
            options={{
              unmountOnBlur: true,
              headerShown: false,
              tabBarLabel: '',
              tabBarIcon: ({ focused }) => {
                return <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon name="plus" size={30} color={focused ? '#007878f2' : '#ffff'} />
                </View>
              }
            }} />
        </Tab.Navigator>

      </NavigationContainer>
    </Provider>

  );
}

