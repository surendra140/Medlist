import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const SignupScreen = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>SignupScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignupScreen