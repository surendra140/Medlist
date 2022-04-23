import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Screens/Home';
import CartScreen from '../Screens/CartScreen';
import ServiceScreen from '../Screens/ServiceScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import EditScreen from '../Screens/EditScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
    return (
    <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
       <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="CartScreen" component={CartScreen} />
       <Stack.Screen name="EditScreen" component={EditScreen} />
    
      </Stack.Navigator>
    
    )
  }
  

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle: {backgroundColor: '#eee'},
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'blue'
    }}>
        <Tab.Screen name="Home2" component={HomeStack}
         options={({route}) => ({
             tabBarStyle:{display:getTabBarVisibility(route),backgroundColor: '#eee'},
            tabBarIcon: ({color, size}) => (
                <Ionicons name='home-outline' color={color} size={size} />
            )
            })}/>
        <Tab.Screen name="CartScreen" component={CartScreen} options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="heart-outline" color={color} size={size} />
            )
            }} />
        <Tab.Screen name="ServiceScreen" component={ServiceScreen}  options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name='heart-outline' color={color} size={size} />
            )
            }} />
      </Tab.Navigator>
  )
}

const getTabBarVisibility = (route) => {
    console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    console.log(routeName);

    if(routeName == 'CartScreen'){
        return 'none';
    }
    return 'flex';
}
export default TabNavigator;