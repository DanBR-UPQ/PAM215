import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import Home from './screens/Home.js'
import Profile from './screens/Profile.js'
import Settings from './screens/Settings.js'
import detalle from './screens/detalle.js'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName = "Home"
      screenOptions = { ({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) =>{
          let iconName

          if (route.name === 'Home') {
            iconName = 'home-outline'
          } else if (route.name === 'Profile'){
            iconName = 'person-outline'
          } else if (route.name === 'Settings'){
            iconName = 'settings-outline'
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
      })
      }
      
      >

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="detalle" component={detalle} />



      </Tab.Navigator>
    </NavigationContainer>
  );
}


