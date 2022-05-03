import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Grid3 from './Grid3';

const Specialist = ({navigation}) => {
  return (
    <View>
         <View style={styles.content}>
             <View style={styles.head}>
                    <Text style={{fontSize: 14,fontWeight: '700', color:'#000'}}>Consult top doctors online for any health concern</Text>
                    <Text style={{fontSize: 12,fontWeight: '400', color:'#000'}}>Private online consultations with verified doctors in all specialists</Text>          
             </View>
                <View style={{marginRight: 10}}>
                   <Grid3 />
                 </View>   

             <View>
                 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorsScreen')}>
                     <Text style={{marginTop: 7, fontWeight: 'bold', color: '#000'}}>View All Specialists</Text>
                 </TouchableOpacity>
             </View>  
         </View>
</View>
  )
}

export default Specialist;

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