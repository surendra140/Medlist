import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Grid2 from './Grid2';

const Doctors = ({navigation}) => {
  return (
    <View>
         <View style={styles.content}>
             <View style={styles.head}>
                    <Text style={{fontSize: 14,fontWeight: '700', color:'#000'}}>Find Doctors Available Near You</Text>
                    <Text style={{fontSize: 12,fontWeight: '400', color:'#000'}}>Book assured appointments even during the covid-19 pandemic</Text>          
             </View>
                <View style={{marginRight: 10}}>
                   <Grid2 />
                 </View>   

             <View>
                 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorsScreen')}>
                     <Text style={{marginTop: 7, fontWeight: 'bold', color: '#000'}}>See All Doctors</Text>
                 </TouchableOpacity>
             </View>  
         </View>
</View>
  )
}

export default Doctors;

const styles = StyleSheet.create({ 

    speciality_card: {
        padding: 5,
        width: "32%",
        textAlign: 'center'
        
    },
    speciality :{
        fontWeight: '400',
        color: "#414146", 
        textAlign:'center', 
    },
    head: {
      marginTop: 15
    },
    content :{
        width: '100%',
        margin: 5,
        padding:10,
        display:'flex',
        justifyContent:'flex-end',
    },
    button : {
        borderWidth: 1,
        borderColor: '#000',
        textAlign:'center',
        alignItems:'center',
        height: 40,
        borderRadius: 5
    }
 })