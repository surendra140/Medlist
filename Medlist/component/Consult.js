import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated';
import Grid from './Grid';

const Consult = () => {
  return (
    <View style={styles.container}>
         
                <View style={{marginRight: 10}}>
                   <Grid />
                 </View>   

</View>
  )
}

export default Consult;

const styles = StyleSheet.create({ 

   container: {
        marginTop:20,
        marginLeft:10,
        justifyContent:'center',
        
   }
 })