import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FlatGrid } from 'react-native-super-grid';

const Grid2 = () => {
    const [items, setItems] = React.useState([
      
        { name: 'Dr. Name', speciality: 'General Physician',venue: "Indore" },
        { name: 'Dr. Name', speciality: 'General Physician',venue: "Indore" },
        { name: 'Dr. Name', speciality: 'General Physician',venue: "Indore" },
        { name: 'Dr. Name', speciality: 'General Physician',venue: "Indore" },
        { name: 'Dr. Name', speciality: 'General Physician',venue: "Indore" },
        { name: 'Dr. Name', speciality: 'General Physician',venue: "Indore" },
  
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
          source={require('../images/bg1.jpg')}
          style={{height: 90, width: 90, borderRadius: 40, marginTop: 20, marginLeft: 10}}  />
          </View> 
          <View style={{flex:1,marginTop: 20}}> 
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCode}>{item.speciality}</Text>
        <Text style={styles.itemCode}>{item.venue}</Text>
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