import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CartScreen = ({naviagtion}) => {
  return (
    <View>
        <TouchableOpacity onPress={() => naviagtion.navigate('EditProfile')}>
        <Text>CartScreen</Text>
           </TouchableOpacity>
      <Text>CartScreen</Text>
    </View>
  )
}

export default CartScreen;