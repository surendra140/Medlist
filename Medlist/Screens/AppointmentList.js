import { View, Text,StyleSheet, Image, Dimensions, ScrollView, SafeAreaView,FlatList, StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';


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
    <View style={{paddingLeft: 5, marginRight:10}}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.text1}>
        <Text style={{color: '#000', }}>Date :{Date}</Text>
        <Text style={{color: '#000', marginLeft:60}}>Place: {place}</Text>
        <Text style={{color: '#000', marginLeft:40
      }}>Unconfirmed</Text>
    </View>
     
     <View style={{flexDirection: 'row'}}>
     <TouchableOpacity style={styles.button1} onPress = {()=> alert("Successfully cancelled")}>
         <Text style={{color: '#000'}}>Cancel</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button2}  onPress = {() => navigation.goBack()}>
         <Text style={{color: '#000'}}>Edit</Text>
     </TouchableOpacity>
       </View> 
     </View>   
  </View>
);

const AppointmentList = ({navigation}) => {


  const renderItem = ({ item }) => (
    <>
     <TouchableOpacity activeOpacity={1} >
    <Item title={item.title} Date={item.Date} place={item.place} Speciality={item.Speciality} image_url={item.image_url} navigation ={navigation} />
    </TouchableOpacity>
    
    </>
  );

  return (
     <>   
     <View style={styles.container1}>
     <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}        
            />
    </SafeAreaView>
    
    </View>
</>

  )
}

export default AppointmentList;

const styles = StyleSheet.create({   
  container1: {
    flex:1,
    borderRadius: 5,
    width: "95%",
    borderRadius: 10,
    marginLeft:9,
    marginTop:20
  },
  container: {
    borderRadius: 5,
    width: "100%",
    borderRadius: 10
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
    backgroundColor:'#fff',
    borderRadius: 5,
    alignItems:'flex-start',
    padding: 10,
    margin: 8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft:20 ,
    marginTop:5
  },
  text1:{
    marginLeft: 20,
    flexDirection:'row',
    marginLeft: 20,
    justifyContent:'space-between'
  },
 
  button1: {
      marginTop: 8,
      borderRadius: 5,
      borderColor: '#000',
      borderWidth:1,
      width: 100,
      marginLeft:30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',    
           
  },
  button2: {
    marginTop: 8,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth:1,
    width: 100,
    marginLeft:70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',   
    backgroundColor:'#ed243b' ,
         
}
    
});
