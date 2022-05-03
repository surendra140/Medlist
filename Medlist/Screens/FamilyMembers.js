import { SafeAreaView, View, FlatList, StyleSheet, Text,Image ,StatusBar, TouchableOpacity } from 'react-native';
import React,{ useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const Item = ({ name , img, time1,gender, relation }) => (
    <View style={styles.item}>
     
      <View style={{marginLeft:10}}>
          <Text style={styles.title}>{name}</Text>
        <View style={styles.text1}>
            <Text style={{color: '#000'}}>Date Of Birth : {time1}</Text>
            <Text style={{color: '#000'}}>Gender : {gender} </Text>
            <Text style={{color: '#000'}}>Relation : {relation} </Text>
    </View>
      </View>
      <View style={styles.imgCont}>
         <Image source={{uri: img}} style={{width: 120, height: 100,}}/>
      </View>
      
    </View>
  );

const FamilyMembers = ({navigation}) => {
    const renderItem = ({ item }) => (
        <Item name={item.name} img={item.profileImg} time1={item.dateofbirth}  gender={item.gender} relation={item.relation}  />
      );

      const [records, setRecords] = useState(null);

      useEffect(() => {
        const fetchPosts = async() => {
            try {
        
                const list = [];
    
               await firestore()
                .collection('FamilyMembers')
                .get()
                .then((querySnapshot) => {
                   // console.log('Total Posts :', querySnapshot.size);
    
                   querySnapshot.forEach(doc => {
                       const {name, profileImg, dateofbirth, gender, relation} = doc.data();
                       list.push({
                           id: doc.id,
                           name: name,
                           profileImg: profileImg,
                           dateofbirth: dateofbirth,
                           gender: gender,
                           relation: relation,
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
             Family Members
          </Text>
        </View>

    <FlatList
        data={records}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

<View style={styles.btnContainer} >
 <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddMembers')} >
           <Text style={styles.btnText}>Add Members</Text>
       </TouchableOpacity>
</View>
   
</>
  )
}

export default FamilyMembers;

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
  