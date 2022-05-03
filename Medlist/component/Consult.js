import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Grid from './Grid';

const Consult = ({navigation}) => {
  return (
    <View style={styles.container}>
         
                <View style={{marginRight: 10}}>
                   <Grid navigation={navigation}/>
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