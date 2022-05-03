import { View, Text, Button, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  
    const Done = ({...props}) => (
        <TouchableOpacity style={{marginHorizontal:15}} {...props}>
            <Text style={{fontSize:16, color: '#000'}}>Done</Text>
        </TouchableOpacity>
    );
  return (
    <Onboarding 
    DoneButtonComponent={Done}
    onSkip={() => navigation.replace('LoginScreen')}
    onDone={()=> navigation.navigate('LoginScreen')}
  pages={[
   
    {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../images/online-doctor.png')} style={{height:300, width:360}} />,
        title: 'Find Your Doctor ',
        subtitle: 'Easy way to make an appoitnment with doctor',
      },
 
  ]}
/>
  )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
