import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


const info = [
    {
        title: 'Instant Video Consultation',
        desc: 'Connect within 60 secs',
        img:
            'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png',
        bg: '#afcfed'
    },
    {
        title: 'Find Doctors Near You',
        desc: 'Confirmed Appointments',
        img: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png',
        bg: '#98cbd6'
    },
];


const Cards = () => {
  return (
  
    <View style={styles.content}>
     {info.map(({ title, desc, img, bg }, indx) => (
					<View key={title} style={[styles.card]}>
						<View style={styles.img_wrap}>
                        <Image
                           source={{
                            uri: img,
                               }}
                               style={styles.img}
                               />
						</View>
						<View style={styles.details}>
							<Text style={{color: "#2d2d32", fontWeight: '700', fontSize: 15}}>{title}</Text>
							<Text style={{color: '#787887', fontSize: 14, fontWeight: '400'}}>{desc}</Text>
						</View>
					</View>
				))}
    </View>
    
  )
}

export default Cards

const styles = StyleSheet.create({ 
    content: {
         flex:1,
         justifyContent:'flex-start',
         height: 350,
         flexDirection:'row',
         width: "100%", 
         position:'relative',
         margin:-8,   
         padding: 30
    },
    card :{
        borderWidth: 1,
        borderRadius: 5.4,
        width: "60%",
        height: "100%",
        marginRight: 50
        
    },
    img_wrap : {
       display:'flex',
       justifyContent:'center',
       alignItems: 'flex-end',
       height: "70%",
       backgroundColor: '#afcfed',
      
    },
    details : {
          height: "20%",
          paddingTop: 5,
          paddingLeft: 3,
          paddingRight: 3,
    },
    img: 
    {
    paddingTop: 15,
    paddingLeft: 35,
    paddingBottom:0,   
    width: "100%",
    height: '100%'
    }
  })