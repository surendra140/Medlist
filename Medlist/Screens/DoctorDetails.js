import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const DoctorDetails = ({route, navigation}) => {
  return (
    <>
 <View style={{flexDirection: 'row'}}>
       <Image style={styles.img} source={require('../images/left-arrow.png')}  />
           <Text style={{fontWeight: 'bold', color: "black", fontSize: 18, justifyContent: 'flex-start', padding: 20}}>
           Doctors Details
          </Text>
        </View>

    <ScrollView>
        <View style={styles.container1}>

          
          <Image
            source={{
                uri: route.params.data[3]
            }}
            style={{ width: "60%", height: 200, borderRadius: 10,}}
          />
          <TouchableOpacity style={{justifyContent:'center', margin: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>{route.params.data[0]}</Text>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>{route.params.data[1]}</Text>
            <Text style={{fontSize: 14, fontWeight: '600', color: '#000'}}>{route.params.data[2]}</Text>   
          </TouchableOpacity>

             <View style={{flexDirection:'row', justifyContent:'space-between',}}>
            <TouchableOpacity style={styles.button} >
              <Text style={{fontSize: 16, fontWeight: '600', color: '#1a22eb'}}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#1a22eb'}}>Message</Text>
            </TouchableOpacity>
            </View>
      
          </View>

          <View styles={styles.container}>
            <View>
              <Text style={styles.text1}>Information</Text>
              <Text style={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
            </View>

            <View>
              <Text style={styles.text1}>Speciality</Text>
              <Text style={styles.text2}>it to make a type specimen book. </Text>
            </View>

            <View>
              <Text style={styles.text1}>Location</Text>
              <Text style={styles.text2}>Apple Hospital Indore </Text>
            </View>

            <View>
              <Text style={styles.text1}>Availability</Text>
              <Text style={styles.text2}>10 AM - 4 PM </Text>
            </View>

          </View>
    </ScrollView>
     <TouchableOpacity style={styles.button2}  onPress = {() => navigation.navigate('BookAppointment',{data: [route.params.data[0], route.params.data[1], route.params.data[2] , route.params.data[3]]})}>
     <Text style={{color: '#000', fontWeight: 'bold'}}>Confirm Appointment</Text>
 </TouchableOpacity>
  </>
  )
}

export default DoctorDetails

const styles = StyleSheet.create({  
  container1: {
    backgroundColor: '#eee',
    borderRadius: 5,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 10
   
  },
  container : {
        backgroundColor:'#fff'
  },
  
    img:{
    width: 20, height: 20, 
    marginLeft: 12,
    marginTop: 22
    
  },
  button: {
    borderRadius: 4,
    borderColor: '#000',
    borderWidth:1,
    width: "40%",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor:'#eee',
    margin: 8
  },
  text1: {
     color: '#000',
     fontWeight: 'bold',
     padding: 10,
     fontSize: 18
  }
  ,
  text2 : {
     color: '#000',
     marginLeft: 25,
     fontSize: 16
  },
  button2 :{
    borderRadius: 4,
    borderColor: '#000',
    borderWidth:1,
    width: "100%",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor:'#eee',
    marginTop: 10
  }
  }
  )
  