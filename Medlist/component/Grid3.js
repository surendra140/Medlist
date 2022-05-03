import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FlatGrid } from 'react-native-super-grid';

const Grid3 = () => {
    const [items, setItems] = React.useState([
        { name: 'Physician',Img:'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg', desc: 'Find the right family doctor in your neighborhood' },
        { name: 'Orthopedist', Img:'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg', desc: 'For Bone and Joints issues, spinal injuries and more' },
        { name: 'Dentist', Img:'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg', desc: 'Teething troubles? Schedule a dental checkup'},
        { name: 'Physiotherapist', Img:'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg', desc: 'Pulled a muscle? Get it treated by a trained physiotherapist' },
       
       
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
          source={{
            uri: item.Img
          }}
          style={{height: 130, width: 120,}}  />
          </View> 
          <View style={{flex:1,marginTop: 20,}}> 
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCode}>{item.desc}</Text>
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