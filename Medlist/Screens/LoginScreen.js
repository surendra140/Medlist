import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen') }>
          <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen