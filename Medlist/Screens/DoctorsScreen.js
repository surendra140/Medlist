import { View, Text,StyleSheet, Image, Dimensions, ScrollView, SafeAreaView,FlatList, StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'




const { width, height } = Dimensions.get('window')

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    place: 'indore',
    Speciality: 'Neurosergeon',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    place: 'indore',
    Speciality: 'Neurosergeon',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    place: 'indore',
    Speciality: 'Neurosergeon',
  },
  
];

const Item = ({ title, Date,place, Speciality, image_url ,navigation }) => (
  <View style={styles.item}>
   <Image
      source={{
        uri: image_url,
      }}
      style={{ width: "30%", height: 100, marginVertical: 15}}
    />
    <View style={{marginLeft:20}}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.text1}>
        <Text style={{color: '#000'}}>Availability :{Date}</Text>
        <Text style={{color: '#000'}}>Venue: {place}</Text>
        <Text style={{color: '#000'}}>Speciality: {Speciality}</Text>
    </View>
     
     <View style={{flexDirection: 'row',}}>
     <TouchableOpacity style={styles.button1} onPress = {() => navigation.navigate('BookAppointment',{data: [title, Speciality, place , image_url]})}>
         <Text style={{color: '#000'}}>Book Appointment</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button2}  onPress = {() => navigation.navigate('DoctorDetails',{data: [title, Speciality, place , image_url]})}>
         <Text style={{color: '#000'}}>View</Text>
     </TouchableOpacity>
       </View> 
     </View>   
  </View>
);

const DoctorsScreen = ({navigation}) => {

  const renderItem = ({ item }) => (
    <>
     <TouchableOpacity activeOpacity={1} >
    <Item title={item.title} Date={item.Date} place={item.place} Speciality={item.Speciality} image_url={item.image_url} navigation ={navigation} />
    </TouchableOpacity>
    
    </>
  );

  return (
     <>   
        <View style={{flexDirection: 'row'}}>
            <Image style={styles.img} source={require('../images/left-arrow.png')}  />
           <Text style={{fontWeight: 'bold', color: "black", fontSize: 18, justifyContent: 'flex-start', padding: 20}}>
             Doctors
          </Text>
        </View>

     
     <SafeAreaView style={styles.container}>
     <Text style={{color: '#000', marginLeft:12, fontWeight: 'bold', fontSize: 18, marginTop: 10}}>All Doctors</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}        
            />
    </SafeAreaView>

</>

  )
}

export default DoctorsScreen;

const styles = StyleSheet.create({   
  container: {
    flex:1,
    borderRadius: 5, 
  },
  img:{
    width: 20, height: 20, 
    marginLeft: 12,
    marginTop: 22
    
  },
 
  HeadText:{
    fontSize:25,
    textAlign:'center',
    padding:15,
  },

  item: { 
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  text1: { 
    marginTop: 8,
  },
  button1: {
      marginTop: 10,
      borderRadius: 5,
      borderColor: '#000',
      borderWidth:1,
      width: 140,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',    
           
  },
  button2: {
    marginTop: 10,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth:1,
    width: 80,
    margin:8,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',    
         
}
    
});
