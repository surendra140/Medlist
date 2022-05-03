import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import DoctorsScreen from '../Screens/DoctorsScreen';
import BookAppointment from '../Screens/BookAppoitnment';
import DoctorDetails from '../Screens/DoctorDetails';
import AppointmentList from '../Screens/AppointmentList';
import FileViewer from '../Screens/FileViewer';
import Home from '../Screens/Home';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
  <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
     <Stack.Screen name="Home" component={Home}/>
     <Stack.Screen name="DoctorsScreen" component={DoctorsScreen}/>
     <Stack.Screen name="DoctorDetails" component={DoctorDetails}/>
     <Stack.Screen name="BookAppointment" component={BookAppointment}/>
     <Stack.Screen name="AppointmentList" component={AppointmentList}/>
  
    </Stack.Navigator>
  
  )
}


const MedHistoryStack = ({navigation}) => {
  return (
  <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
     <Stack.Screen name="ViewData" component={ViewData} />
     <Stack.Screen name="FileViewer" component={FileViewer} />
     <Stack.Screen name="MedicalRecords" component={MedicalRecords}/>
    
    </Stack.Navigator>
  
  )
}

const DoctorsStack = ({navigation}) => {
  return (
  <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
     <Stack.Screen name="DoctorsScreen" component={DoctorsScreen} />
     <Stack.Screen name="DoctorDetails" component={DoctorDetails}/>
     <Stack.Screen name="BookAppointment" component={BookAppointment}/>
     <Stack.Screen name="AppointmentList" component={AppointmentList}/>
    
    </Stack.Navigator>
  
  )
}
const AppointmentStack = ({navigation}) => {
  return (
  <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
     <Stack.Screen name="AppointmentList" component={AppointmentList}/>
    </Stack.Navigator>
  
  )
}


const MemberStack = ({navigation}) => {
  return (
  <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="FamilyMembers" component={FamilyMembers}/>
      <Stack.Screen name="AddMembers" component={AddMembers}/>
      
    
    
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

        <Drawer.Screen name="Home" component={HomeStack}/>
        <Drawer.Screen name="Doctors" component={DoctorsStack} />
        <Drawer.Screen name="My Appointments" component={AppointmentStack} />
        <Drawer.Screen name="Medical Records" component={MedHistoryStack} />
        <Drawer.Screen name="Family Records" component={MemberStack} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      
      </Drawer.Navigator>
  )
}

export default AppStack;