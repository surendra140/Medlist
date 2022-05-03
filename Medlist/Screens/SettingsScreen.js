import { View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity, Platform, Alert } from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Auth } from '../services';

const SettingsScreen = ({route,navigation}) => {

  return (
    <>
        <View style={{flexDirection: 'row'}}>
        <Image style={styles.img} source={require('../images/left-arrow.png')}  />
           <Text style={{fontWeight: 'bold', color: "black", fontSize: 18, justifyContent: 'flex-start', padding: 20}}>
            Settings
          </Text>
        </View>

    <View style={styles.container}>

    <View style={styles.container1}>
    
    <Image 
           source={{uri:'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'}}
           style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10, marginLeft:110}}
            />
    <TouchableOpacity style={{marginLeft: 90,height:100}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000',}}>Surendra Bankar</Text>
      
     </TouchableOpacity>

   </View>

   <View style={styles.container2}>

    <View style={{ borderTopWidth:1, borderTopColor:'#ccc'}}>
           <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontSize: 15, marginLeft: 5, fontWeight:'500', color:'#000'}}>Notification Settings</Text>
                </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
               
                <Text style={{fontSize: 15, marginLeft: 5, fontWeight:'500', color:'#000'}}>About Medlist</Text>
                </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
               
                <Text style={{fontSize: 15, marginLeft: 5, fontWeight:'500', color:'#000'}}>Privacy Policy</Text>
                </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
               
                <Text style={{fontSize: 15, marginLeft: 5, fontWeight:'500', color:'#000'}}>Help and Support</Text>
                </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                
                <Text style={{fontSize: 15, marginLeft: 5, fontWeight:'500', color:'#000'}}>Share with Friends and Family</Text>
                </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => Auth.signOut()} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontSize: 15, marginLeft: 5, fontWeight:'500', color:'#000'}}>Logout</Text>
                </View>
           </TouchableOpacity>
          
       </View>
   </View>
    

</View>

    </>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({  
container1: {
  backgroundColor: 'white',
  height: "15%",
  borderRadius: 5,
  margin: 8,
},

  img:{
  width: 20, height: 20, 
  marginLeft: 12,
  marginTop: 22
  
},
InputText:{
  width: '100%',
  borderBottomColor: '#000000',
  borderBottomWidth: 1,
  marginTop: 10,
  
}, 
button: {
  marginTop: 10,
  borderRadius: 5,
  borderColor: '#000',
  borderWidth:1,
  width: 100,
  margin:8,
  height: 30,
  justifyContent: 'center',
  alignItems: 'center',    
       
},
container: {
  backgroundColor: 'white',
  padding: 16,
  marginTop: 10,
  borderRadius: 5,
  margin: 4
},
container2:{
      backgroundColor:'white',
      marginTop: 50,
},
 
text1 :{
  height: 50,
  width: 160,
  borderColor: 'gray',
  borderWidth: 0.5,
  borderRadius: 8,
  paddingHorizontal: 8,
  marginTop: 8
},
text2 :{
  height: 50,
  width: 160,
  borderColor: 'gray',
  borderWidth: 0.5,
  borderRadius: 8,
  paddingHorizontal: 15,
  marginLeft: 40,
  marginTop: 8
},
button: {
  marginTop: 130,
  borderRadius: 4,
  borderColor: '#000',
  borderWidth:1,
  width: "100%",
  height: 40,
  justifyContent: 'center',
  alignItems: 'center', 
  backgroundColor:'#eee'        
}
}
)
