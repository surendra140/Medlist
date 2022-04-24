import { View, Text, TouchableOpacity, SafeAreaView, AppState } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './Navigation/AuthStack';
import AppStack from './Navigation/AppStack';
import AppContainer from './Navigation';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
   
     <AppContainer />

  )
}
export default App;
