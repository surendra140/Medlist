import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../Screens/ProfileScreen';
import MessageScreen from '../Screens/MessageScreen';
import MomentsScreen from '../Screens/MomentsScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import CustomDrawer from '../component/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const AppStack = ({navigation}) => {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown:false
      }}
      drawerContent={props => <CustomDrawer{...props} /> }
      >

        <Drawer.Screen name="TabNavigator" component={TabNavigator}/>
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="MessageScreen" component={MessageScreen} />
        <Drawer.Screen name="MomentsScreen" component={MomentsScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      
      </Drawer.Navigator>
  )
}

export default AppStack;