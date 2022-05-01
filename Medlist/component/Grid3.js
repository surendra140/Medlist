import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FlatGrid } from 'react-native-super-grid';

const Grid3 = () => {
    const [items, setItems] = React.useState([
        { name: 'General Physician', code: '#1abc9c' },
        { name: 'Orthopedist', code: '#2ecc71' },
        { name: 'Dentist', code: '#3498db' },
        { name: 'Dermatologist', code: '#9b59b6' },
       
       
      ]);

  return (
    <View>
     <FlatGrid
       itemDimension={120}
       data={items}
       style={StyleSheet.gridView}
       spacing={8}
       renderItem={({ item }) => (

        <View style={[styles.itemContainer, { backgroundColor: "#eee" }]}>
        <View style={{flex:1}}>
        <Image 
          source={require('../images/bg1.jpg')}
          style={{height: 90, width: 90, borderRadius: 40, marginTop: 10, marginLeft: 25}}  />
          </View> 
          <View style={{flex:1,marginTop: 20, marginLeft: 10}}> 
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCode}>{item.code}</Text>
        <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      </View>
       )}
            />
    </View>
  )
}

export default Grid3;
const styles = StyleSheet.create({
    gridView: {
      marginTop: 5,
      flex: 1,
      
    },
    itemContainer: {
      borderRadius: 10,
      padding: 15,
      width: 150
    },
    itemName: {
      fontSize: 16,
      color: '#000',
      fontWeight: '700',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#000',
    },
  });