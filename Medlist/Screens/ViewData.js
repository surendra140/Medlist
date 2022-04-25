import { SafeAreaView, View, FlatList, StyleSheet, Text,Image ,StatusBar, TouchableOpacity } from 'react-native';
import React,{ useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const Item = ({ title , img, time1,HosptName, patientName }) => (
    <View style={styles.item}>
     
      <View style={{marginLeft:10}}>
          <Text style={styles.title}>{title}</Text>
        <View style={styles.text1}>
            <Text style={{color: '#000'}}>Date : {time1}</Text>
            <Text style={{color: '#000'}}>Place : {HosptName} </Text>
            <Text style={{color: '#000'}}>Patient Name : {patientName} </Text>
    </View>
      </View>
      <View style={styles.imgCont}>
         <Image source={{uri: img}} style={{width: 120, height: 100,}}/>
      </View>
      
    </View>
  );

const ViewData = ({navigation}) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} img={item.img} time1={item.date} patientName={item.patientName} HosptName={item.HosptName}  />
      );

      const [records, setRecords] = useState(null);

      useEffect(() => {
        const fetchPosts = async() => {
            try {
        
                const list = [];
    
               await firestore()
                .collection('MedicalHistory')
                .get()
                .then((querySnapshot) => {
                   // console.log('Total Posts :', querySnapshot.size);
    
                   querySnapshot.forEach(doc => {
                       const {title, postImg, date,patientName, HosptName} = doc.data();
                       list.push({
                           id: doc.id,
                           title: title,
                           patientName: patientName,
                           HosptName: HosptName,
                           date: date,
                           img: postImg,
                       });
                   })
                })
    
                setRecords(list);
    
    
    
                console.log('Records: ',list);
    
            } catch(e) {
                console.log(e);
            }
        } 
        fetchPosts();
    
      }, [] );
    
  return (
<>
<View style={{flexDirection: 'row',marginLeft:5}}>
            <Image style={styles.img} source={require('../images/left-arrow.png')}  />
           <Text style={{fontWeight: 'bold', color: "black", fontSize: 18, justifyContent: 'flex-start', padding: 20}}>
             Medical Records
          </Text>
        </View>

    <FlatList
        data={records}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

<View style={styles.btnContainer} >
 <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MedicalRecords')} >
           <Text style={styles.btnText}>Add Records</Text>
       </TouchableOpacity>
</View>
   
</>
  )
}

export default ViewData;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#eee',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 28,
    },
    img:{
        width: 20, height: 20, 
        marginTop: 22
        
      },
      imgCont:{
         flex:1,
         justifyContent:'flex-end',
         alignItems:'flex-end',
         margin:4
      },
     
      item: { 
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
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
      btnContainer:{
        justifyContent:"center",
        alignItems:'center',
        marginBottom:5 
      },

      btn:{
        marginTop:10,
        borderColor: "black",
        borderWidth:0.5,
        width:"90%",
        height:50,
        justifyContent:'center',
        borderRadius:8,
        backgroundColor:'#eee'
    },
    btnText:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
      textAlign:'center'
    },
  });
  