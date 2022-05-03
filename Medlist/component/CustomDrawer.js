import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Auth } from '../services';



const CustomDrawer = (props) => {
  return (
      <View style={{flex:1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#bea3e6' }}>
            <ImageBackground source={{uri:'https://media.istockphoto.com/vectors/abstract-white-and-light-gray-wave-modern-soft-luxury-texture-with-vector-id1298523613?k=20&m=1298523613&s=612x612&w=0&h=FtDcueCudX7RrsVLZZfhbK93kae64xTiAO1QtwqPvbI='}} style={{padding: 20}}>
            <Image 
                source={{uri:'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'}}
                style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
            />  
            <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>Surendra Bankar</Text>
            </ImageBackground>

            <View style={{flex: 1, backgroundColor: '#fff', paddingTop:10}}>
               <DrawerItemList {...props} />
            </View>
            
        </DrawerContentScrollView>
        <View style={{padding:20, borderTopWidth:1, borderTopColor:'#ccc'}}>
           <TouchableOpacity onPress={() => {}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name='share-social-outline' size={22} color='#000' />
                <Text style={{fontSize: 15, marginLeft: 5, fontWeight:'500', color:'#000'}}>Share</Text>
                </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => Auth.signOut()} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name='exit-outline' size={22} color='#000' />
                <Text style={{fontSize: 15, marginLeft: 5, fontWeight:'500', color:'#000'}}>Sign Out</Text>
                </View>
           </TouchableOpacity>
        </View>

      
      </View>
  
  )
}

export default CustomDrawer