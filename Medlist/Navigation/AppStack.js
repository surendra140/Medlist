import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../Screens/ProfileScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import CustomDrawer from '../component/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';
import TabNavigator from './TabNavigator';
import MedicalRecords from '../Screens/MedicalRecords';
import { createStackNavigator } from '@react-navigation/stack';
import ViewData from '../Screens/ViewData';
import FamilyMembers from '../Screens/FamilyMembers';
import AddMembers from '../Screens/AddMembers';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MedHistoryStack = ({navigation}) => {
  return (
  <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
     <Stack.Screen name="ViewData" component={ViewData} />
     <Stack.Screen name="MedicalRecords" component={MedicalRecords}/>
    
    </Stack.Navigator>
  
  )
}

const MemberStack = ({navigation}) => {
  return (
  <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
     
     <Stack.Screen name="AddMembers" component={AddMembers}/>
     <Stack.Screen name="FamilyMembers" component={FamilyMembers}/>
    
    </Stack.Navigator>
  
  )
}

const AppStack = ({navigation}) => {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown:false
      }}
      drawerContent={props => <CustomDrawer{...props} /> }
      >

        <Drawer.Screen name="TabNavigator" component={TabNavigator}/>
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="Medical Records" component={MedHistoryStack} />
        <Drawer.Screen name="Family Records" component={MemberStack} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      
      </Drawer.Navigator>
  )
}

export default AppStack;