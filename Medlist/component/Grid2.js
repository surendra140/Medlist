import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FlatGrid } from 'react-native-super-grid';

const Grid2 = () => {
    const [items, setItems] = React.useState([
      
        { name: 'Dr.Murali Reddy', speciality: 'Dermatologist',venue: "Indore",Img: 'https://www.practostatic.com/images1-fabric/doctor/953743/dr-murali-reddy-61079374694e8.jpg',exp: '5 years experience' },
        { name: 'Dr.Jayprakash', speciality: 'General Physian',venue: "Indore",Img:'https://www.practostatic.com/images1-fabric/doctor/652470/dr-jayaprakasha-g-5ac9249d22b60.jpg',exp: '5 years experience' },
        { name: 'Dr.Kamal Kishor', speciality: 'Psychiatrist',venue: "Indore", Img:'https://www.practostatic.com/images1-fabric/doctor/647391/dr-kamal-kishore-verma-5d69f93f40699.jpg',exp: '5 years experience'},
        { name: 'Dr. Ravindra', speciality: 'Surgeon',venue: "Indore", Img:'https://www.practostatic.com/images1-fabric/doctor/593554/dr-ravindrakumar-awachar-5ceccf29953dc.jpg',exp: '5 years experience'},
        { name: 'Dr.Asmeet Kaur', speciality: 'Dermatologist',venue: "Indore", Img:'https://www.practostatic.com/images1-fabric/doctor/517388/dr-asmeet-kaur-sawhney-60fbebf140b07.jpg',exp: '5 years experience' },
        { name: 'Dr. Vandana', speciality: 'Gynecologist',venue: "Indore", Img: 'https://www.practostatic.com/images1-fabric/doctor/772615/dr-vandhana-5d8ca4f1e9023.jpg',exp: '5 years experience' },
  
      ]);

  return (
    <View>
     <FlatGrid
       itemDimension={120}
       data={items}
       style={StyleSheet.gridView}
       spacing={10}
       horizontal={true}
       renderItem={({ item }) => (

        <View style={[styles.itemContainer, { backgroundColor: "#eee" }]}>
        <View style={{flex:1}}>
        <Image 
          source={{
            uri: item.Img
          }}
          style={{height: 90, width: 90, borderRadius: 40, marginLeft: 10}}  />
          </View> 
          <View style={{flex:1,marginTop: 4}}> 
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCode}>{item.speciality}</Text>
        <Text style={styles.itemCode}>{item.venue}</Text>
        <Text style={styles.itemCode}>{item.exp}</Text>
        </View>
      </View>
       )}
            />
    </View>
  )
}

export default Grid2;
const styles = StyleSheet.create({
    gridView: {
      marginTop: 5,
      flex: 1,
      
    },
    itemContainer: {
      borderRadius: 10,
      padding: 10,
      height: "90%",
      width: 300,
      flexDirection:'row',
      
    },
    itemName: {
      fontSize: 18,
      color: '#000',
      fontWeight: 'bold',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#000',
    },
  });