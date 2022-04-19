import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown:false
      }}>
    
        <Drawer.Screen name="Home" component={Home} />
      
      </Drawer.Navigator>
  )
}

export default AppStack;