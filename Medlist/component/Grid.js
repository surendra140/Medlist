import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FlatGrid } from 'react-native-super-grid';

const Grid = () => {
    const [items, setItems] = React.useState([
        { name: 'Book Appointment', code: '#1abc9c' },
        { name: 'Lab Test', code: '#2ecc71' },
        { name: 'Medicines', code: '#3498db' },
        { name: 'Surgeries', code: '#9b59b6' },
        
       
      ]);

  return (
    <View>
     <FlatGrid
       itemDimension={130}
       data={items}
       style={StyleSheet.gridView}
       spacing={9}
       renderItem={({ item }) => (

        <View style={[styles.itemContainer, { backgroundColor: "#eee" }]}>
        <View style={{flex:1}}>
        <Image 
          source={require('../images/bg1.jpg')}
          style={{height: 130, width: 140, borderRadius: 5,}}  />
          </View> 
          <View style={{flex:1,marginTop:90, justifyContent:"center", alignItems:'center'}}> 
        <Text style={styles.itemName}>{item.name}</Text>
       
        </View>
      </View>
       )}
            />
    </View>
  )
}

export default Grid;
const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-start',
      borderRadius: 10,
      padding: 5,
      height: 200,
      width: 150,
   
     
    },
    itemName: {
      fontSize: 14,
      color: '#000',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#000',
    },
  });