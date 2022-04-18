import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  return (
    <SafeAreaView
    style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff'
    }}
    >
      <View>
        <Text style={{fontSize:30, fontWeight:'bold', color:'#20315f'}}>Home</Text>
      </View>
      <TouchableOpacity>
        <Text>
          Let's Begin
        </Text>
        <MaterialIcons name='arrow-forward' size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default App;
