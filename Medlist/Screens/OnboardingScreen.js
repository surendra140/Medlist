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
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../images/coffee.png')} />,
      title: 'Onboarding1',
      subtitle: 'Done with React Native Onboarding Swiper',
    },

    {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../images/deals.png')} />,
        title: 'Onboarding2',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

      {
        backgroundColor: '#fff',
        image: <Image source={require('../images/desserts.png')} />,
        title: 'Onboarding3',
        subtitle: 'Done with React Native Onboarding Swiper',
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
