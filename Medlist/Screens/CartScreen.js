import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CartScreen = ({navigation}) => {
  return (
    <View>
        <TouchableOpacity onPress={() =>navigation.navigate('EditScreen')}>
        <Text>CartScreen</Text>
           </TouchableOpacity>
      <Text>CartScreen</Text>
    </View>
  )
}

export default CartScreen;