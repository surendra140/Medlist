import { View, Text, Button,SafeAreaView, ScrollView, ImageBackground, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import { sliderData } from '../model/data';
import BannerSlider from '../component/BannerSlider';
import Cards from '../component/Cards';
import Consult from '../component/Consult';
import Doctors from '../component/Doctors';
import Specialist from '../component/Specialist';

const Home = ({navigation}) => {

    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item} />
    } 
  return (
    <SafeAreaView style={{flex:1, backgroundColor: "#fff"}}>
        <ScrollView style={{padding: 20}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
                <View style={{flexDirection: 'row', marginLeft: 5}}>
                <Text style={{fontWeight: 'bold', fontSize: 28, color: '#000'}}>
                 MED
               </Text>
                <Text
                style={{fontWeight: 'bold', fontSize: 28, color: '#64beff'}}>
                 LIST
             </Text> 
                </View>
           
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <ImageBackground 
                source={{uri:'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'}}
                style={{width: 35, height: 35}}
                imageStyle={{borderRadius: 25}}
                />
                </TouchableOpacity>
            </View>
            
            <View 
               style={{
                   flexDirection:'row',
                   borderColor:'#c6c6c6',
                   borderWidth:1,
                   borderRadius:8,
                   paddingHorizontal:10,
                   paddingVertical: 5,
                   height:50
                   }}>
                <Feather name="search" size={20} color="#c6c6c6" style={{marginRight: 5, margin:5}} />
                <TextInput placeholder='Search'/>
            </View>
            
            <View 
                style={{
                    marginVertical: 15,
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}
            >
                <Text style={{fontSize: 16, color:'#000', fontWeight: '600'}}>Upcoming</Text>
                <TouchableOpacity>
                    <Text style={{color: '#0aada8'}}>See all</Text>
                </TouchableOpacity>
            </View>

            <Carousel 
                ref={(c) => {_carousel = c; }}
                data={sliderData}
                renderItem={renderBanner}
                sliderWidth={400}
                itemWidth={400}
                loop={true}
            />
            
           {/* Consult */}

        <View>
            <Consult navigation={navigation}/>
        </View>

        {/* Doctors */}
        <View>
            <Doctors navigation={navigation} />
        </View>

        {/* Specialist Doctor */}
        <View>
            <Specialist navigation={navigation}/>
        </View>

        </ScrollView>
    </SafeAreaView>

  )
}

export default Home