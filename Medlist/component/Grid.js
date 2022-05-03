import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FlatGrid } from 'react-native-super-grid';

const Grid = () => {
    const [items, setItems] = React.useState([
        { name: 'Book Appointment', Img:'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png',bg: '#98cbd6'},
        { name: 'Lab Test', Img:'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png',bg: '#ccd0db' },
        { name: 'Medicines', Img: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png',bg: '#a2cae7' },
        { name: 'Surgeries', Img:'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png',bg: '#d5d8fc' },
        
       
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
          source={{
            uri: item.Img
          }}
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