import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from '../screens/Feed';
import Discover from '../screens/Find';
import Plus from '../screens/Plus';
import Inbox from '../screens/MessageBox';
import Profile from '../screens/Profile';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faInbox, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: faHome,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHome} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faSearch} size={28} />
          )
        }}
      />
      <Tab.Screen
        name="Plus"
        component={Plus}
        options={{
          tabBarLabel: 'Plus',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faPlus} size={28} />
          )
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) => (
             <FontAwesomeIcon icon={faInbox} size={20} color="#010101" />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
             <FontAwesomeIcon icon={faUser} size={20} color="#010101" />
          )
        }}
      />
    </Tab.Navigator>
          
    </NavigationContainer>
    
  );
}
