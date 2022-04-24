import { SafeAreaView, View, FlatList, StyleSheet, Text,Image ,StatusBar } from 'react-native';
import React,{ useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const Item = ({ title , img, date}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{date}</Text>
      <Image source={{uri: img}} style={{width: 120, height: 120}}/>
    </View>
  );

const ViewData = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} img={item.img} time={item.date}   />
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
                       const {title, postImg, postTime} = doc.data();
                       list.push({
                           id: doc.id,
                           title: title,
                           date: postTime,
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
    <FlatList
        data={records}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

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
      fontSize: 32,
    },
  });
  