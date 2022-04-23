import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
       AsyncStorage.getItem('alreadyLaunched').then((value) => {
         if(value == null) {
           AsyncStorage.setItem('alreadyLaunched', 'true');
           setIsFirstLaunch(true);
         }else {
           setIsFirstLaunch(false);
         }
       });
  }, []);

  if(isFirstLaunch === null) {
    return null;
  } else if( isFirstLaunch == true) {
    return (
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
  
      </Stack.Navigator>
    );
  }
  else {
    
    return <LoginScreen />;
  }
}

export default AuthStack;